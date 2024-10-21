import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilo para el encabezado, con padding alrededor y fondo gris claro.
  header: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  // Estilo para el texto del encabezado, con tamaño de fuente grande, negrita y centrado.
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Estilo para el contenedor principal de los productos, con padding alrededor.
  main: {
    flex: 1,
    padding: 10,
  },
  // Estilo para las filas en el FlatList, distribuyendo los elementos con espacio entre ellos.
  row: {
    justifyContent: 'space-between',
  },
  // Estilo para las imágenes de los productos, con un tamaño fijo y bordes redondeados.
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  // Estilo para el contenido de la tarjeta, con padding alrededor.
  cardContent: {
    padding: 10,
  },
  // Estilo para el título dentro de la tarjeta, con tamaño de fuente y negrita.
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Estilo para el texto dentro de la tarjeta, con tamaño de fuente más pequeño.
  cardText: {
    fontSize: 14,
  },
  // Estilo para el contenedor del modal, centrado en la pantalla con fondo semi-transparente.
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // Estilo para el contenido del modal, con ancho específico, fondo blanco, padding y bordes redondeados.
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  // Estilo para el título del modal, con tamaño de fuente y negrita, y margen inferior.
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  // Estilo para los grupos de campos en el modal, con margen inferior.
  formGroup: {
    marginBottom: 15,
  },
  // Estilo para los campos de texto en el modal, con borde, padding y fondo blanco.
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  // Estilo para el área de texto en el modal, con altura específica, texto alineado arriba y borde.
  textarea: {
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
  },
  // Estilo para el contenedor de los botones en el modal, con dirección en fila y espacio entre ellos.
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
