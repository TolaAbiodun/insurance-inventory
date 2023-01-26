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
      'https://i.ibb.co/mcjdVMj/13051478-6-femme-qui-va-de-lavant-carton-entoile33x24.jpg',
  },
  {
    id: uuidv4(),
    name: 'Cartier ring',
    purchasePrice: 199.99,
    category: 'Jewelry',
    imgUrl: 'https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg',
  },
  {
    id: uuidv4(),
    name: 'Guitar',
    purchasePrice: 299.99,
    category: 'Musical Instrument',
    imgUrl: 'https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg',
  },
];
