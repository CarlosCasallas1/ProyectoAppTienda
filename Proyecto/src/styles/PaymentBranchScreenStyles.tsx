import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contenedor principal: ocupa todo el espacio disponible, centra el contenido verticalmente,
  // aplica un padding alrededor y establece un fondo gris claro para toda la pantalla.
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  // Campos de texto: añade un margen inferior para separar los campos de texto,
  // y establece un fondo blanco para los campos de entrada, facilitando su visualización.
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },

  // Botón: agrega un margen superior para separar el botón de los campos de texto,
  // y establece un color de fondo morado para el botón, haciéndolo destacar.
  button: {
    marginTop: 20,
    backgroundColor: '#6200ee',
  },
});

export default styles;
