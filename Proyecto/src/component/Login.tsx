import React, { useState } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/LoginStyles'; // Ajusta la ruta según la ubicación real del archivo

interface Props {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setLoggedInUserName } = useAuth();

  const validateUser = (user: string) => {
    return user.length <= 10;
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!user) {
      Alert.alert('Error', 'Por favor, ingresa el nombre de usuario.');
      return;
    }

    if (!validateUser(user)) {
      Alert.alert('Error', 'El nombre de usuario debe tener un máximo de 10 caracteres.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres, incluir al menos 1 mayúscula, 1 carácter especial, letras y números.');
      return;
    }

    setLoggedInUserName(user);
    navigation.navigate('Confirmation', { products: [] });
  };

  const handleCreateAccount = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <PaperProvider>
      <ImageBackground
        source={require('../../src/images/LogFondo.jpg')}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <Text style={styles.label}>Usuario:</Text>

            <TextInput
              style={[styles.textInput, styles.customInputWidth]}
              value={user}
              onChangeText={setUser}
              placeholder="Nombre"
              placeholderTextColor="#888"
            />

            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              style={[styles.textInput, styles.customInputWidth]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Contraseña"
              placeholderTextColor="#888"
            />
            <Button
              style={styles.customBtn}
              mode="contained"
              onPress={handleLogin}
            >
              Iniciar Sesión
            </Button>
            <Button
              style={styles.customBtn}
              mode="outlined"
              onPress={handleCreateAccount}
            >
              Crear Cuenta
            </Button>
          </View>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

export default Login;
