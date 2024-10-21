import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  productContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: '#F5F5F5', // Color de fondo gris
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  productDetails: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  dataContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  data: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    alignSelf: 'center',
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalData: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cartButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    margin: 10,
  },
  favoriteButton: {
    backgroundColor: '#03dac6',
    padding: 10,
    margin: 10,
  },
});

export default styles;
