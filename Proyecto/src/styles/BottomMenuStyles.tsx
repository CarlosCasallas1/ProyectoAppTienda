import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilo para el contenedor del menú, ubicado en la parte inferior de la pantalla
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgba(250,250,250,0.9)',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(200,200,200,0.2)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
},

  // Estilo para alinear y centrar el contenido de los botones
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    },

  // Estilo para el texto de las etiquetas
    label: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
    },
});

export default styles;
