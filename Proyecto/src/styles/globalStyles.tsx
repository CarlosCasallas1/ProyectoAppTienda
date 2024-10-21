// globalStyles.ts
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({


  
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },


  // Estilo para el contenedor principal de la vista
  container: {
    flex: 1, // Asegura que ocupe toda la pantalla
    backgroundColor: '#fff', // Fondo blanco
  },
 // Estilo para el encabezado
  header: {
    padding: 10,
    backgroundColor: '#f5f5f5', // Fondo gris claro para el encabezado
  },


  
  // Estilo para el texto del encabezado
  headerText: {
    fontSize: 24, // Tamaño de fuente grande para el texto del encabezado
    fontWeight: 'bold', // Fuente en negrita
    textAlign: 'center', // Centra el texto
  },
  // Estilo para las filas en una lista
  row: {
    justifyContent: 'space-between', // Distribuye los elementos con espacio entre ellos
  },
  // Estilo para el contenido de FlatList
  flatListContent: {
    paddingHorizontal: 10, // Espacio horizontal
    paddingBottom: 60, // Espacio en la parte inferior
  },
  // Estilo para las tarjetas (cards)
  card: {
    flex: 1, // Ocupa todo el espacio disponible en la fila
    padding: 10,
    margin: 10,
    borderRadius: 10, // Bordes redondeados
    backgroundColor: '#f5f5f5', // Fondo gris claro
  },
  // Estilo para las imágenes en las tarjetas
  image: {
    width: '100%', // Ajusta el ancho para que se adapte al tamaño del contenedor
    height: 100, // Altura fija para las imágenes
    borderRadius: 10, // Bordes redondeados para la imagen
  },
  // Estilo para el contenido de las tarjetas
  cardContent: {
    padding: 10,
  },
  // Estilo para el título de las tarjetas
  cardTitle: {
    fontSize: 16, // Tamaño de fuente para el título
    fontWeight: 'bold', // Fuente en negrita
  },
  // Estilo para el texto de las tarjetas
  cardText: {
    fontSize: 14, // Tamaño de fuente para el texto
  },
  // Estilo para el pie de página
  footer: {
    padding: 10,
    backgroundColor: '#fff', // Fondo blanco para el pie de página
  },
  // Estilo para el contenedor del modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con opacidad para el modal
  },
  // Estilo para el contenido del modal
  modalContent: {
    width: '80%', // Ancho del modal
    backgroundColor: '#fff', // Fondo blanco para el modal
    padding: 20,
    borderRadius: 10, // Bordes redondeados
  },
  // Estilo para el título del modal
  modalTitle: {
    fontSize: 18, // Tamaño de fuente para el título del modal
    fontWeight: 'bold', // Fuente en negrita
    marginBottom: 15, // Espacio debajo del título
  },
  // Estilo para los grupos de formularios
  formGroup: {
    marginBottom: 15, // Espacio debajo de cada grupo de formulario
  },
  // Estilo para los campos de entrada de texto
  textInput: {
    borderWidth: 1, // Ancho del borde
    borderColor: '#ccc', // Color del borde
    borderRadius: 4, // Bordes redondeados
    padding: 8, // Espacio interno
    fontSize: 16, // Tamaño de fuente
    backgroundColor: '#fff', // Fondo blanco para los campos de entrada
  },
  // Estilo para el contenedor de los botones
  buttonContainer: {
    flexDirection: 'row', // Alinea los botones en fila
    justifyContent: 'space-between', // Distribuye los botones con espacio entre ellos
  },
  // Estilo para el texto de etiquetas
  label: {
    fontSize: 20, // Tamaño de fuente para la etiqueta
    fontWeight: 'bold', // Fuente en negrita
    marginBottom: 10, // Espacio inferior
  },
  cartContainer: {
    
  
    flex: 1, // Ocupa todo el espacio disponible
      
    
    padding: 10, // Espacio interior
        
      
      },
    


});

export default globalStyles;
