import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  logoutButton: {
    fontSize: 16,
    color: 'red', // Color del texto del botón de cerrar sesión
    marginLeft: 10,
    marginRight: 10, // Margen a la derecha
    marginVertical: 5, // Margen vertical para agregar espacio
    borderColor: 'red', // Color del borde
    borderWidth: 1, // Ancho del borde
    borderRadius: 5, // Esquinas redondeadas
    padding: 5, // Espacio interno
  },
  menuButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 2,
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 10,
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 3,
  },
  dropdownItem: {
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalContainer: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 60,
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 20,
    marginBottom: 5,
  },
  modalData: {
    fontSize: 17,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default styles;
