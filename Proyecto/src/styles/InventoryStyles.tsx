import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Fondo transparente
    borderRadius: 0, // Sin bordes
    borderWidth: 0, // Sin grosor de borde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18, // Tamaño mayor para más profundidad
    fontWeight: 'bold',
    color: '#333', // Color más oscuro para destacar
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Sombra para más profundidad
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 3,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textShadowColor: 'rgba(0, 0, 0, 0.1)', // Sombra ligera
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  },
  data: {
    fontSize: 14,
    color: '#333',
  },
  feedbackContainer: {
    backgroundColor: '#f5f5f5', // Color de fondo gris
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  feedbackTitle: {
    fontWeight: 'bold' as 'bold', // Asegúrate de usar un valor válido
    marginVertical: 5,
  },
  feedbackText: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  selectedRating: {
    color: 'gold',
    marginHorizontal: 5,
  },
  rating: {
    color: 'gray',
    marginHorizontal: 5,
  },
});

export default styles;


