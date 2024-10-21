
import React, { useState } from 'react';
import { View, Text, Image, FlatList, Button, Modal, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import globalStyles from '../src/styles/globalStyles'; 
import styles from '../src/styles/CartStyles'; 
import { useCart } from '../src/context/CartContext'; 

const Cart: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { cart, total, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [showAppointmentModal, setShowAppointmentModal] = useState<boolean>(false);

  const handleProceedToCheckout = () => {
    if (cart.length > 0) {
      setShowAppointmentModal(true);
    }
  };

  const handleContinue = () => {
    console.log('Valor Total:', total);
    setShowAppointmentModal(false);
    // Aquí puedes agregar la lógica para completar la compra
  };

  // Definición de las funciones de manejo
  const handlePSE = () => {
    console.log('Pago PSE Seleccionado');
    // Lógica para el pago PSE
  };

  const handleTarjetaDeCredito = () => {
    console.log('Pago con Tarjeta de Crédito Seleccionado');
    // Lógica para el pago con tarjeta de crédito
  };

  const handleEfecty = () => {
    console.log('Pago Efecty Seleccionado');
    // Lógica para el pago Efecty
  };

  return (
    <ImageBackground
      source={require('../src/images/Fondo.jpg')}
      style={styles.background}
    >
      <FlatList
        data={cart} 
        keyExtractor={(item) => item.product.id.toString()}
        ListHeaderComponent={
          <View style={globalStyles.header}>
            <Text style={globalStyles.headerText}>Carrito de Compras</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.product.imageUrl }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.product.title}</Text>
              <Text style={styles.cardText}>Año: {item.product.year} | Tipo: {item.product.type}</Text>
              <Text style={styles.cardText}>Precio: ${item.product.price} x {item.quantity}</Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item.product.id)}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                
                <Text style={styles.quantityText}>{item.quantity}</Text>

                <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.product.id)}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <Button title="Eliminar" onPress={() => removeFromCart(item.product.id)} />
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text>No hay artículos en el carrito.</Text>} 
        ListFooterComponent={
          <View style={globalStyles.footer}>
            <Text style={styles.totalText}>Total: ${total}</Text> 
            <Button title="Proceder al Pago" onPress={handleProceedToCheckout} />
          </View>
        }
      />

      <Modal
        transparent={true}
        visible={showAppointmentModal}
        onRequestClose={() => setShowAppointmentModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Button title="Cancelar" onPress={() => setShowAppointmentModal(false)} />
            </View>
            <Text style={styles.modalTitle}>Confirmar Compra</Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
              {cart.map((item) => (
                <View key={item.product.id} style={styles.modalItemContainer}>
                  <Text style={styles.modalText}>{item.product.title}</Text>
                  <Image source={{ uri: item.product.imageUrl }} style={styles.modalImage} />
                  <Text style={styles.modalDescription}>{item.product.description}</Text>
                  <Text style={styles.modalData}>Tipo: {item.product.type}</Text>
                  <Text style={styles.modalData}>Año: {item.product.year}</Text>
                  <Text style={styles.modalData}>Precio: ${item.product.price} x {item.quantity}</Text>
                </View>
              ))}
              <Text style={styles.modalText}>Valor Total: ${total}</Text>
              <View style={styles.buttonContainer}>
                <Button title="PSE" onPress={handlePSE} />
                <Button title="Tarjeta de Crédito" onPress={handleTarjetaDeCredito} />
                <Button title="Efecty" onPress={handleEfecty} />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Cart;
