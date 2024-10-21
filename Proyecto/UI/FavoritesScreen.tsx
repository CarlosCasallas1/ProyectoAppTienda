import React from 'react';
import { ScrollView, Text, Image, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useFavorites } from '../src/context/FavoritesContext'; // Asegúrate de que la ruta sea correcta
import styles from '../src/styles/FavoritesScreenStyles'; // Estilos importados

const FavoritesScreen: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites(); // Obtener el estado y la acción de favoritos

  return (
    <ImageBackground
      source={require('../src/images/Fondo.jpg')}
      style={styles.background}
    >
      <ScrollView>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <View key={product.id} style={styles.productContainer}>
              <View style={styles.productDetails}>
                <Text style={styles.title}>{product.title}</Text>
                <Image source={{ uri: product.imageUrl }} style={styles.img} />
                <View style={styles.dataContainer}>
                  <Text style={styles.description}>{product.description}</Text>
                  <Text style={styles.data}>${product.price}</Text>
                </View>
              </View>
              {/* Botón para eliminar el producto de favoritos */}
              <Button
                mode="contained"
                onPress={() => removeFavorite(product.id)} // Eliminar producto al hacer clic en el botón
                style={styles.removeButton}
              >
                Eliminar de Favoritos
              </Button>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No tienes productos en favoritos.</Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default FavoritesScreen;
