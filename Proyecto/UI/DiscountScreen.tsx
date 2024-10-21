import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { Products, Product } from './Inventory';
import { useCart } from '../src/context/CartContext';
import { useFavorites } from '../src/context/FavoritesContext';

const DiscountScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { addToCart } = useCart();
  const { addFavorite } = useFavorites();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtrar productos con descuento
  const discountedProducts = Products.filter(product => product.discount >= 1);

  const handleProductSelect = (product: Product) => setSelectedProduct(product);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      Alert.alert('Producto Agregado', `${selectedProduct.title} ha sido agregado a tu carrito.`);
      setSelectedProduct(null); // Limpiar selección después de agregar
    }
  };

  const handleAddToFavorites = () => {
    if (selectedProduct) {
      addFavorite(selectedProduct);
      Alert.alert('Producto Agregado a Favoritos', `${selectedProduct.title} ha sido agregado a tus favoritos.`);
      setSelectedProduct(null); // Limpiar selección después de agregar
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handleProductSelect(item)} style={styles.productItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>Precio: ${item.price}</Text>
      <Text style={styles.productDiscount}>Descuento: {item.discount}%</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../src/images/Fondo.jpg')} // Ruta de tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Productos con Descuento</Text>
        <FlatList
          data={discountedProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProduct}
        />
        
        {selectedProduct && (
          <View style={styles.modalContainer}>
            <Button mode="text" onPress={() => setSelectedProduct(null)} style={styles.closeButton}>
              Cerrar
            </Button>
            <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
            <Image source={{ uri: selectedProduct.imageUrl }} style={styles.modalImage} />
            <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
            <Text style={styles.modalData}>Tipo: {selectedProduct.type}</Text>
            <Text style={styles.modalData}>Año: {selectedProduct.year}</Text>
            <Text style={styles.modalData}>Precio: ${selectedProduct.price}</Text>
            <View style={styles.buttonContainer}>
              <Button mode="contained" onPress={handleAddToCart}>Agregar al Carrito</Button>
              <Button mode="contained" onPress={handleAddToFavorites}>Agregar a Favoritos</Button>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Asegúrate de que el fondo cubra toda la pantalla
    resizeMode: 'cover', // Para cubrir toda la pantalla sin distorsión
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semi-transparente
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#F5F5F5', // Color de fondo gris
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productDiscount: {
    fontSize: 16,
    color: 'red',
  },
  modalContainer: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
    backgroundColor: '#F5F5F5', // Color de fondo gris
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalData: {
    fontSize: 17,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default DiscountScreen;
