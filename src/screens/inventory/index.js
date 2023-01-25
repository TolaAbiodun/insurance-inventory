import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Container, InputField, Card, DropDown, RNModal} from '_components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Fonts} from '_styles';
import {categoryData} from '../../utils/data';

const AddInventoryModal = ({modalVisible, setModalVisible}) => {
  return (
    <RNModal visible={modalVisible} onClose={() => setModalVisible(false)}>
      <Text>Hello</Text>
    </RNModal>
  );
};

const InventoryScreen = () => {
  const [selected, setSelected] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <AddInventoryModal
        modalVisible={showModal}
        setModalVisible={setShowModal}
      />
      <Text>App</Text>
      <View>
        <InputField
          label="Name"
          placeholder="Hello"
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
        <Card
          name="Cartier Ring"
          purchasePrice="$5,000"
          imgUrl="https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg"
        />

        {/* inout select */}
        <View style={styles.container}>
          {!!selected && (
            <Text>
              Selected: label = {selected.label} and value = {selected.value}
            </Text>
          )}
          <DropDown
            label="Select a Category"
            data={categoryData}
            onSelect={setSelected}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Icon name="add-circle" size={40} color={Colors.PRIMARY} />
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'left',
  },
});

export default InventoryScreen;
