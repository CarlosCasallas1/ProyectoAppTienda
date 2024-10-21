import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import styles from '../../src/styles/ProductListScreenStyles'; // Importación de los estilos
import globalStyles from '../../src/styles/globalStyles'; // Importación de los estilos globales
import { Products, Product } from '../../UI/Inventory'; // Asegúrate de que esta ruta sea correcta

// Agrupa los productos por categoría
const groupByCategory = (products: Product[]) => {
  return products.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {} as { [key: string]: Product[] });
};

// Pantalla de lista de productos
const ProductListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Agrupación de productos y aplanamiento del array
  const groupedProducts = groupByCategory(Products);
  const allProducts = Object.values(groupedProducts).flat();

  // Manejo de la búsqueda de productos
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Buscar Artículos</Text>
        <TextInput
          style={globalStyles.textInput} // Asegúrate de que este estilo esté definido en globalStyles
          placeholder="Buscar..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Button
                mode="outlined"
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
              >
                Ver Detalles
              </Button>
            </View>
          )}
        />
      </View>
    </PaperProvider>
  );
};

export default ProductListScreen;





