import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, Alert, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import Inventory, { Product } from './Inventory';
import styles from '../src/styles/ConfirmationStyles';
import { useFavorites } from '../src/context/FavoritesContext'; 
import { useCart } from '../src/context/CartContext'; 
import { useAuth } from '../src/context/AuthContext'; 

const Confirmation: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { addFavorite } = useFavorites(); 
  const { addToCart } = useCart(); 
  const { loggedInUserName, logout } = useAuth(); // Traemos la función logout del contexto de autenticación
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            logout();  // Limpia el estado de sesión
            navigation.navigate('Login');  // Redirige a la pantalla de Login
          }}
        >
          <Text style={styles.logoutButton}>Cerrar sesión</Text>
        </TouchableOpacity>
      ),
      headerTitle: 'Products', // Solo un título 'Products' en el centro
    });
  }, [navigation, logout]);

  const menuOptions = [
    { label: 'Carrito', action: () => navigation.navigate('Cart') },
    { label: 'Favoritos', action: () => navigation.navigate('FavoritesScreen') },
    { label: 'Ofertas', action: () => navigation.navigate('DiscountScreen') },
    { label: 'Mis Compras', action: () => navigation.navigate('MyPurchasesScreen') },
    { label: 'Categorías', action: () => navigation.navigate('CategoriesScreen') },
    { label: 'Perfil', action: () => navigation.navigate('ProfileScreen', { username: loggedInUserName }) },
    { label: 'Soporte Técnico', action: () => navigation.navigate('SupportScreen') },
  ];

  const handleProductSelect = (product: Product) => setSelectedProduct(product);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      Alert.alert('Producto Agregado', `${selectedProduct.title} ha sido agregado a tu carrito.`);
      navigation.navigate('Cart');
      setSelectedProduct(null);
    }
  };

  const handleAddToFavorites = () => {
    if (selectedProduct) {
      addFavorite(selectedProduct);
      Alert.alert('Producto Agregado a Favoritos', `${selectedProduct.title} ha sido agregado a tus favoritos.`);
      navigation.navigate('FavoritesScreen');
      setSelectedProduct(null);
    }
  };

  const toggleMenu = () => setMenuVisible(prev => !prev);

  return (
    <ImageBackground
      source={require('../src/images/Fondo.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>Menú</Text>
        </TouchableOpacity>

        {menuVisible && (
          <View style={styles.dropdownContainer}>
            <FlatList
              data={menuOptions}
              keyExtractor={item => item.label}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={item.action}>
                  <Text style={styles.dropdownItem}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar productos..."
          style={styles.searchInput}
        />

        <Text style={styles.title}>Información del Producto</Text>
        <Inventory onSelect={handleProductSelect} searchQuery={searchQuery} />
        
        {selectedProduct && (
          <View style={styles.modalContainer}>
            <Button
              mode="text"
              onPress={() => setSelectedProduct(null)}
              style={styles.closeButton}
            >
              <Text>Cerrar</Text>
            </Button>
            <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
            <Image source={{ uri: selectedProduct.imageUrl }} style={styles.modalImage} />
            <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
            <Text style={styles.modalData}>Tipo: {selectedProduct.type}</Text>
            <Text style={styles.modalData}>Año: {selectedProduct.year}</Text>
            <Text style={styles.modalData}>Precio: ${selectedProduct.price}</Text>
            <View style={styles.buttonContainer}>
              <Button mode="contained" onPress={handleAddToCart}>
                <Text>Agregar al Carrito</Text>
              </Button>
              <Button mode="contained" onPress={handleAddToFavorites}>
                <Text>Agregar a Favoritos</Text>
              </Button>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default Confirmation;
