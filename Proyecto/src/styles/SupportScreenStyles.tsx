


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilo para el contenedor principal, heredado de estilos globales.
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    padding: 20, // Espacio interno alrededor del contenido
    backgroundColor: '#f5f5f5', // Fondo gris claro
  },
  // Estilo para el texto de etiqueta, con tamaño de fuente grande y centrado.
  label: {
    fontSize: 24, // Tamaño de fuente grande para el texto
    fontWeight: 'bold', // Fuente en negrita
    textAlign: 'center', // Alineación centrada
    marginBottom: 20, // Margen inferior para separación
  },
  // Estilo para el botón, con color de fondo específico.
  button: {
    marginTop: 20, // Margen superior para separar el botón del contenido
    backgroundColor: '#6200ee', // Color de fondo morado del botón
  },
});

export default styles;
