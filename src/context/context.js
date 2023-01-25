import {createContext} from 'react';

export const InventoryContext = createContext({
  inventoryItems: [],
  setInventoryItems: () => {},
});
