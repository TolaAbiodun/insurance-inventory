/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {InventoryContext} from '../../context/context';
import {getFromStore, saveToStore} from '../../utils/storage-helpers';
import {Container, InputField, Card, DropDown, RNModal} from '_components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {default as MIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Fonts} from '_styles';
import {categoryData} from '../../utils/data';
import styles from './style';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {toast, clean_euro_format} from '_utils/helpers';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const InventoryScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {inventoryItems, setInventoryItems} = useContext(InventoryContext);

  useEffect(() => {
    getInventory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getInventory = async () => {
    const data = await getFromStore('inventory');
    if (data !== null) {
      setInventoryItems(data);
    }
  };

  const fields = {
    name: '',
    value: '',
    description: '',
    category: '',
    imageUri: '',
  };

  const [input, setInput] = useState(fields);
  const [error, setError] = useState(fields);

  const handleInputChange = (name, value) => {
    setInput(prev => ({
      ...prev,
      [name]: value,
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    setError(prev => {
      const stateObj = {...prev, [name]: ''};

      switch (name) {
        case 'name':
          if (!value) {
            stateObj[name] = 'Please enter a product name.';
          }
          break;
        case 'value':
          if (!value) {
            stateObj[name] = 'Please enter product value.';
          }
          break;
        case 'category':
          if (!value) {
            stateObj[name] = 'Please select a product category.';
          }
          break;
        case 'imageUri':
          if (!value) {
            stateObj[name] = 'Please add a product image.';
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  const RequiredFieldsValidation = () => {
    validateInput('name', input.name);
    validateInput('value', input.value);
    validateInput('imageUri', input.imageUri);
    validateInput('category', input.category);
    return (
      input.name.length > 0 &&
      input.value.length > 0 &&
      input.category.length > 0 &&
      input.imageUri.length > 0
    );
  };

  const validateItemPriceTotal = items => {
    const sum = items.reduce(
      (total, item) => total + Number(item.purchasePrice),
      0,
    );
    if ((sum + Number(input.value)).toFixed(2) <= 40000) {
      return true;
    } else {
      Alert.alert(
        'Error',
        'Could not add item as the total value limit of €40,000 has been exceeded.',
      );
      return false;
    }
  };

  const handleAddProduct = () => {
    if (RequiredFieldsValidation() && validateItemPriceTotal(inventoryItems)) {
      const newProduct = {
        id: uuidv4(),
        name: input.name,
        category: input.category,
        purchasePrice: input.value,
        description: input.description,
        imgUrl: input.imageUri,
      };
      setInventoryItems(prevProducts => [...prevProducts, newProduct]);
      saveToStore('inventory', inventoryItems);
      setInput(fields);
      setModalVisible(false);
      toast.success({message: 'Product added successfully', duration: 5000});
    }
  };

  const selectSource = () => {
    Alert.alert(
      'Select source',
      'Choose a source to pick an image from',
      [
        {
          text: 'Camera',
          onPress: () => takePicture(),
        },
        {
          text: 'Gallery',
          onPress: () => selectImage(),
        },
      ],
      {cancelable: true},
    );
  };

  const selectImage = async () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    await launchImageLibrary(options, res => {
      handleInputChange('imageUri', res.assets[0].uri);
    });
  };

  const takePicture = async () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchCamera(options, res => {
      handleInputChange('imageUri', res.assets[0].uri);
    });
  };

  const removeImage = () => {
    setInput(prev => ({
      ...prev,
      imageUri: '',
    }));
  };

  const handleClose = () => {
    setModalVisible(false);
    setInput(fields);
    setError(fields);
  };

  return (
    <Container>
      {/* modal starts */}
      <RNModal
        visible={modalVisible}
        onAddProduct={() => handleAddProduct()}
        onClose={() => handleClose()}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View>
              <TouchableOpacity
                onPress={selectSource}
                style={[
                  styles.imageSelectorWrapper,
                  {borderColor: error.imageUri !== '' && Colors.RED},
                ]}>
                {input.imageUri !== '' ? (
                  <Image
                    source={{uri: input.imageUri}}
                    style={styles.selectedImg}
                  />
                ) : (
                  <>
                    <Icon
                      name="photo-camera"
                      color={Colors.PRIMARY}
                      size={60}
                    />
                    <Text style={styles.descText}>Add Photo</Text>
                  </>
                )}
                {input.imageUri !== '' ? (
                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => removeImage()}>
                    <MIcon name="delete-circle" size={32} color={Colors.RED} />
                  </TouchableOpacity>
                ) : null}
              </TouchableOpacity>
              <Text style={[styles.error, {textAlign: 'center'}]}>
                {error.imageUri}
              </Text>

              <InputField
                value={input.name}
                label="Name"
                placeholder="Bracelet"
                onChangeText={val => handleInputChange('name', val)}
                onEndEditing={val => validateInput('name', val)}
                error={error.name}
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* Custom Drop Down Select */}
              <View>
                <Text style={styles.inputLabel}>Category</Text>
                <View style={styles.container}>
                  <DropDown
                    label="Select a Category"
                    data={categoryData}
                    onSelect={selected => {
                      handleInputChange('category', selected.value);
                    }}
                  />
                  <View>
                    {error.category !== '' && (
                      <Text style={styles.error}>{error.category}</Text>
                    )}
                  </View>
                </View>
              </View>
              {/* value field */}
              <InputField
                value={input.value}
                label="Value"
                placeholder="700"
                onChangeText={val => handleInputChange('value', val)}
                onEndEditing={val => validateInput('value', val)}
                error={error.value}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                icon={
                  <Icon
                    name="euro"
                    style={{
                      color: Colors.GRAY_DARK,
                      fontSize: Fonts.FONT_SIZE_18,
                    }}
                  />
                }
                iconPosition="right"
              />
              <InputField
                label="Description"
                placeholder="Optional"
                hasLargeText
                autoCapitalize="none"
                autoCorrect={false}
                multiline={true}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </RNModal>
      {/* modal ends */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Inventory</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="add-circle" size={32} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={false}
        data={inventoryItems}
        numColumns={2}
        keyExtractor={item => item.id}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 120}} />}
        renderItem={({item}) => (
          <Card
            name={item.name}
            purchasePrice={clean_euro_format(item.purchasePrice)}
            imgUrl={item.imgUrl}
          />
        )}
      />
    </Container>
  );
};

export default InventoryScreen;
