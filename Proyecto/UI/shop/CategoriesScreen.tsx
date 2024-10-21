import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import globalStyles from '../../src/styles/globalStyles';
import { Products } from '../../UI/Inventory';

const categories = [
  { id: 1, name: 'Calzado' },
  { id: 2, name: 'Electronica' },
  { id: 3, name: 'Juguetes' },
  { id: 4, name: 'Hogar' },
  { id: 5, name: 'Libro' },
];

const CategoriesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = selectedCategory
    ? Products.filter(product => product.title.toLowerCase().includes(selectedCategory.toLowerCase()))
    : Products;

  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Categorías</Text>
        <View style={styles.categoryContainer}>
          <FlatList
            horizontal
            contentContainerStyle={styles.categoryList}
            data={categories}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedCategory(item.name)} style={styles.categoryButton}>
                <Text style={styles.categoryButtonText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <Text style={globalStyles.label}>Productos</Text>
        {selectedCategory && (
          <TouchableOpacity onPress={() => setSelectedCategory(null)} style={styles.listButton}>
            <Text style={styles.listButtonText}>Listar productos</Text>
          </TouchableOpacity>
        )}

        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }} // Para que haya espacio extra al final
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  categoryList: {
    marginLeft: 0,
  },
  categoryButton: {
    marginHorizontal: 2,
    margin: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 15,
    alignItems: 'center',
  },
  categoryButtonText: {
    fontWeight: 'bold',
    color: 'black', // Cambia el color a negro
  },
  productItem: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    padding: 10,
  },
  productImage: {
    width: 50,
    height: 50,
  },
  listButton: {
    marginTop: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  listButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});


export default CategoriesScreen;
