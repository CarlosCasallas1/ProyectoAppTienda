import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    // Estilo para la barra de pestañas en la parte inferior de la pantalla
    tabBarStyle: {
        height: 60,
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(200,200,200,0.2)',
        backgroundColor: 'rgba(250,250,250,.9)',
    },
    // Estilo para las etiquetas de las pestañas en la barra de pestañas
    tabBarLabel: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    // Estilo para el contenedor del ícono del carrito
    cartIconContainer: {
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles; // Exportación por defecto
