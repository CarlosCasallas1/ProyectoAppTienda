// useFavorites.ts

import React, { createContext, useContext, useState } from 'react';
import { Product } from '../../UI/Inventory'; // Ajusta la ruta según sea necesario

// Definir la interfaz del contexto
interface FavoritesContextType {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
}

// Crear el contexto de favoritos
const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

// Proveedor del contexto de favoritos
export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Función para agregar un producto a favoritos (con verificación de duplicados)
  const addFavorite = (product: Product) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);
    if (!isAlreadyFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    } else {
      console.log(`El producto con id ${product.id} ya está en favoritos.`);
    }
  };

  // Función para eliminar un producto de favoritos
  const removeFavorite = (productId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de favoritos
export const useFavorites = () => useContext(FavoritesContext);
