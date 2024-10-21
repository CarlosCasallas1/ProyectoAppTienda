import React, { createContext, useContext, useState } from 'react';
import { Product } from '../../UI/Inventory';

// Definir la interfaz del contexto
interface FavoritesContextType {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
}

// Crear el contexto
const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

// Proveedor del contexto
export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Función para agregar un producto a favoritos sin duplicados
  const addFavorite = (product: Product) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, product]);
    }
  };

  // Función para eliminar un producto de favoritos
  const removeFavorite = (productId: number) => {
    setFavorites(favorites.filter(product => product.id !== productId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de favoritos
export const useFavorites = () => useContext(FavoritesContext);
