// DiscountContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Products, Product } from '../../UI/Inventory'; // Asegúrate de que la ruta sea correcta

const DiscountContext = createContext<Product[]>([]); // Cambia el tipo de `never[]` a `Product[]`

interface DiscountProviderProps {
  children: ReactNode;
}

export const DiscountProvider: React.FC<DiscountProviderProps> = ({ children }) => {
  const discountedProducts = Products.filter(product => product.discount > 0); // Filtra productos con descuento mayor a 0
  
  return (
    <DiscountContext.Provider value={discountedProducts}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscounts = () => useContext(DiscountContext);
