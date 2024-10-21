import { StyleSheet } from 'react-native';
import globalStyles from '../../src/styles/globalStyles';

const styles = StyleSheet.create({
  // Estilo para el contenedor de cada ítem en la lista, con márgenes, padding, y borde.
item: {
    marginBottom: 20, // Margen inferior para separación entre ítems
    padding: 10, // Espacio interno alrededor del contenido
    borderWidth: 1, // Ancho del borde
    borderColor: '#ddd', // Color del borde
    borderRadius: 10, // Bordes redondeados
},
});

export default styles;
