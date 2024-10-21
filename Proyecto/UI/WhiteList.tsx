import React, { useState } from 'react';
import { View, Text, Image, FlatList, Modal, TextInput, Button } from 'react-native';
import styles from '../src/styles/WhiteListStyles'; // Importación de los estilos
import globalStyles from '../src/styles/globalStyles';
import { Product, Products } from './Inventory';

// Aquí podrías tener una forma de obtener los favoritos, como props o contexto
const favoriteProducts: Product[] = []; // Inicializa esta lista con tus productos favoritos

const WhiteList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [showAppointmentModal, setShowAppointmentModal] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleAppointmentSubmit = () => {
    console.log('User:', user);
    console.log('Password:', password);
    setShowAppointmentModal(false);
  };

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.card, styles.header]}>
        <Text style={styles.headerText}>Favorites list</Text>
      </View>

      <View style={styles.main}>
        <FlatList
          data={favoriteProducts} // Usa la lista de favoritos aquí
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={globalStyles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>Año: {item.year} | Tipo: {item.type}</Text>
                <Text style={styles.cardText}>Precio: ${item.price}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* Modal logic can be added here if needed */}
      {/* <Button style={styles.cartButton} mode="contained" onPress={() => navigation.navigate('Cart')}>
        Cart
      </Button> */}
    </View>
  );
};

export default WhiteList;

 