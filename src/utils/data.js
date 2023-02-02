import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export const categoryData = [
  {label: 'Art', value: 'Art'},
  {label: 'Electronics', value: 'Electronics'},
  {label: 'Jewelry', value: 'Jewelry'},
  {label: 'Musical Instrument', value: 'Musical Instrument'},
];

export const inventoryData = [
  {
    id: uuidv4(),
    name: "Femme qui va de l'avant",
    purchasePrice: 999.99,
    category: 'Art',
    imgUrl:
      'https://www.vintagemakeup.fr/wp-content/uploads/2022/09/calendrier-blissim.webp',
  },
  {
    id: uuidv4(),
    name: 'Cartier ring',
    purchasePrice: 199.99,
    category: 'Jewelry',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sy_7bXgJmkwf9VIM_IUSZQirYqjxgRZWPA&usqp=CAU',
  },
  {
    id: uuidv4(),
    name: 'Guitar',
    purchasePrice: 299.99,
    category: 'Musical Instrument',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6p_UbTQm08HDjGAAB74bO54-K5FBgN3_uw&usqp=CAU',
  },
];
