import React from 'react';
import { View, Text, FlatList, Image, ImageBackground, StyleSheet } from 'react-native';
import { PaperProvider, Divider } from 'react-native-paper';

// Ejemplo de datos de compras (puedes obtenerlos de un contexto o API)
const purchases = [
  { id: 1, status: 'Entregado' },
  { id: 2, status: 'En tránsito' },
  { id: 3, status: 'Cancelado' },
];

// Asegúrate de que la ruta sea correcta
import Inventory, { Products } from './Inventory';

const MyPurchasesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Filtrar productos comprados
  const purchasedProducts = Products.filter(product =>
    purchases.some(purchase => purchase.id === product.id)
  );

  const renderPurchaseItem = ({ item }: any) => {
    // Encuentra el estado correspondiente a la compra
    const purchase = purchases.find(p => p.id === item.id);
    const status = purchase ? purchase.status : 'Desconocido';

    return (
      <View style={styles.purchaseItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        <View style={styles.purchaseDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text style={{ color: status === 'Cancelado' ? 'red' : status === 'En tránsito' ? 'blue' : 'green' }}>
  {status}
</Text>
          </View>
        {/* Línea separadora */}
        <View style={styles.separator} />
      </View>
    );
  };

  return (
    <PaperProvider>
      <ImageBackground
        source={require('../src/images/Fondo.jpg')} // Asegúrate de que esta ruta sea correcta
        style={{ flex: 1, padding: 20 }}
        resizeMode="cover" // Puedes ajustar el modo de redimensionamiento según tus necesidades
      >
        <Text style={{ fontSize: 24, marginBottom: 20, color: 'Black' }}>Mis Compras</Text>
        <View style={styles.container}>
          <FlatList
            data={purchasedProducts}
            keyExtractor={item => item.id.toString()} // Asegúrate de que sea string
            renderItem={renderPurchaseItem}
            ItemSeparatorComponent={() => <Divider />} // O usa esto para un divisor de react-native-paper
          />
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5', // Color de fondo gris
    borderRadius: 5,
    padding: 10,
  },
  purchaseItem: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
  },
  purchaseDetails: {
    marginLeft: 10,
  },
  productTitle: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc', // Color de la línea separadora
    marginVertical: 10,
  },
});

export default MyPurchasesScreen;
