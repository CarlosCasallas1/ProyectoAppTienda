import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ImageBackground } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../src/styles/globalStyles';

const SupportScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [requestType, setRequestType] = useState<string>('queja');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    setError('');

    // Validaciones
    if (!description || description.length > 300) {
      setError('La descripción es obligatoria y debe tener un máximo de 300 caracteres.');
      return;
    }

    // Aquí puedes manejar el envío de la solicitud
    Alert.alert('Solicitud enviada', 'Gracias por su solicitud, será atendida pronto.');

    // Reiniciar campos
    setDescription('');
    setRequestType('queja');
  };

  return (
    <PaperProvider>
      <ImageBackground
        source={require('../src/images/Fondo.jpg')} // Asegúrate de que esta ruta sea correcta
        style={styles.background} // Aplica el estilo de fondo
      >
        <View style={[globalStyles.container, styles.container]}>
          <Text style={globalStyles.label}>Ayuda y Soporte</Text>

          <Text>Tipo de solicitud:</Text>
          <Picker
            selectedValue={requestType}
            onValueChange={(itemValue: string) => setRequestType(itemValue)}
            style={{ height: 50, width: '100%' }}
          >
            <Picker.Item label="Agradecimientos" value="agradecimientos" />
            <Picker.Item label="Queja" value="queja" />
            <Picker.Item label="Petición" value="petición" />
            <Picker.Item label="Recurso" value="recurso" />
          </Picker>

          <View style={styles.separator} />

          <Text>Descripción de la solicitud (máximo 300 caracteres):</Text>
          <TextInput
            value={description}
            onChangeText={setDescription} // Actualiza el texto al cambiar
            maxLength={300} // Restringe el número de caracteres
            multiline
            numberOfLines={4}
            style={styles.textInput}
          />
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

          <View style={styles.separator} />

          <Button mode="contained" onPress={handleSubmit}>
            Enviar Solicitud
          </Button>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajustar la imagen de fondo
  },
  container: {
    backgroundColor: 'rgba(245, 245, 245, 0.9)', // Fondo gris con opacidad para ver la imagen
    padding: 20,
    flex: 1,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    height: 100,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default SupportScreen;
