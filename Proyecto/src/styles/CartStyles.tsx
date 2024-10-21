import { StyleSheet } from 'react-native';

// Estilos para la vista de proceder al pago
const styles = StyleSheet.create({
  // Estilos generales
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardContent: {
    padding: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold', // Agregado para hacer el texto en negrita
  },

  // Estilos para el modal de proceder al pago
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    backgroundColor: '#F5F5F5', // Fondo gris
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '95%',
    overflow: 'scroll',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold', // Agregado para hacer el texto en negrita
  },
  modalData: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold', // Agregado para hacer el texto en negrita
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  modalText: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold', // Agregado para hacer el texto en negrita
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  modalItemContainer: {
    marginBottom: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#6200EE',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  paymentButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
});

export default styles;
