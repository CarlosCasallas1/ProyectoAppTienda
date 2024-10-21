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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '400%', // Ocupa un poco más del ancho de la pantalla
    elevation: 5,
  },
  title: {
    fontSize: 30, // Reducir ligeramente el tamaño del título
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 18, // Tamaño más pequeño para los textos de etiqueta
    marginBottom: 0,
    color: '#333',
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 55, // Padding más pequeño
    paddingVertical: 1,    // Reducir el padding vertical
    width: '90%',
    fontSize: 16,          // Hacer el texto del campo más pequeño
    marginBottom: 0,      // Ajustar el espacio entre campos
  },
  inputContainer: {
    width: '90%',
  },
  formList: {
    width: '90%',
  },
  customBtn: {
    marginTop: 8,
    width: '50%',
    paddingVertical: 10,   // Reducir el tamaño del botón
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalItem: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 60, // Ajusta según el espacio que necesites
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
  successMessage: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#d4edda', // Fondo verde claro
    borderRadius: 5,
    width: '90%', // Ancho del mensaje
    alignItems: 'center', // Centrar el contenido
  },




});

export default styles;
