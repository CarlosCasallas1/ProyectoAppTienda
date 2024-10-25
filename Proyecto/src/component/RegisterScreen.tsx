import React, { useState } from 'react';
import { View, Text, ImageBackground, Alert, FlatList, TouchableOpacity } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
import styles from '../styles/RegisterScreenStyles';
import RegisterService from '../services/RegisterService';
import IRegisterCredentials from '../models/IRegisterCredentials';

const cities: Record<string, string[]> = {
  Antioquia: ['Medellín', 'Envigado', 'Itagüí', 'Bello', 'Rionegro'],
  Cundinamarca: ['Bogotá', 'Soacha', 'Chía', 'Zipaquirá', 'Facatativá'],
  'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Cartago'],
  Atlántico: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Galapa'],
};

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [cityDropdownVisible, setCityDropdownVisible] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  
  const registerService = new RegisterService(); // Instanciar el servicio

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFirstName = (firstName: string): boolean => {
    return firstName.length <= 10;
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateAddress = (address: string): boolean => {
    return address.length <= 30;
  };

  const validateBirthDate = (dateString: string): boolean => {
    const birthDate = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (birthDate > today || isNaN(birthDate.getTime())) return false;
    if (age < 18 || age > 50 || (age === 50 && monthDiff > 0)) return false;

    return true;
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
      return;
    }

    if (!validateFirstName(firstName)) {
      Alert.alert('Error', 'El nombre de usuario debe tener un máximo de 10 caracteres.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres, incluir al menos 1 mayúscula, 1 carácter especial, letras y números.');
      return;
    }

    if (!validateAddress(address)) {
      Alert.alert('Error', 'La dirección debe tener un máximo de 30 caracteres.');
      return;
    }

    if (!validateBirthDate(birthDate)) {
      Alert.alert('Error', 'No está en el rango de edad para crear la cuenta.');
      return;
    }

    if (!(department in cities)) {
      Alert.alert('Error', 'Por favor, seleccione un departamento válido.');
      return;
    }

    const availableCities = cities[department as keyof typeof cities];
    if (!availableCities.includes(city)) {
      Alert.alert('Error', 'Por favor, seleccione una ciudad válida.');
      return;
    }

    try {
      const user: IRegisterCredentials = {
        email,
        password,
        firstName,
        birthDate,
        address,
        department,
        city,
      };

      await registerService.registerUser(user); // Llamada al servicio

      setIsRegistered(true);
      Alert.alert('Registro Exitoso', 'Usuario registrado correctamente.');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'No se pudo registrar el usuario.');
    }
  };

  const departmentOptions = Object.keys(cities).map(dep => ({ label: dep, value: dep }));

  const selectDepartment = (dep: string) => {
    setDepartment(dep);
    setCity('');
    setCityDropdownVisible(false);
    setDropdownVisible(false);
  };

  const availableCities = department ? cities[department as keyof typeof cities] : [];

  const selectCity = (selectedCity: string) => {
    setCity(selectedCity);
    setCityDropdownVisible(false);
  };

  return (
    <PaperProvider>
      <ImageBackground source={require('../../src/images/LogFondo.jpg')} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.card}>
            {isRegistered ? (
              <View style={styles.successMessage}>
                <Text style={styles.title}>¡Registro Exitoso!</Text>
                <Text>Usuario: {firstName}</Text>
                <Text>Correo: {email}</Text>
                <Text>Fecha de nacimiento: {birthDate}</Text>
                <Text>Dirección: {address}</Text>
                <Text>Departamento: {department}</Text>
                <Text>Ciudad: {city}</Text>
              </View>
            ) : (
              <>
                <Text style={styles.title}>Registrarse</Text>

                <View style={styles.formList}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Usuario:</Text>
                    <TextInput
                      style={styles.textInput}
                      value={firstName}
                      onChangeText={setFirstName}
                      placeholder="Nombre de usuario"
                      placeholderTextColor="#888"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Correo electrónico:</Text>
                    <TextInput
                      style={styles.textInput}
                      value={email}
                      onChangeText={setEmail}
                      placeholder="Correo electrónico"
                      placeholderTextColor="#888"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contraseña:</Text>
                    <TextInput
                      style={styles.textInput}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      placeholder="Contraseña"
                      placeholderTextColor="#888"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <TextInput
                      style={styles.textInput}
                      value={birthDate}
                      onChangeText={setBirthDate}
                      placeholder="YYYY-MM-DD"
                      placeholderTextColor="#888"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Dirección:</Text>
                    <TextInput
                      style={styles.textInput}
                      value={address}
                      onChangeText={setAddress}
                      placeholder="Dirección"
                      placeholderTextColor="#888"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Departamento:</Text>
                    <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
                      <TextInput
                        style={styles.textInput}
                        value={department}
                        editable={false}
                        placeholder="Seleccione un departamento"
                        placeholderTextColor="#888"
                      />
                    </TouchableOpacity>
                    {dropdownVisible && (
                      <FlatList
                        data={departmentOptions}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }) => (
                          <TouchableOpacity onPress={() => selectDepartment(item.value)}>
                            <Text style={styles.dropdownItem}>{item.label}</Text>
                          </TouchableOpacity>
                        )}
                      />
                    )}
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Ciudad:</Text>
                    <TouchableOpacity onPress={() => setCityDropdownVisible(!cityDropdownVisible)}>
                      <TextInput
                        style={styles.textInput}
                        value={city}
                        editable={false}
                        placeholder="Seleccione una ciudad"
                        placeholderTextColor="#888"
                      />
                    </TouchableOpacity>
                    {cityDropdownVisible && (
                      <FlatList
                        data={availableCities}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                          <TouchableOpacity onPress={() => selectCity(item)}>
                            <Text style={styles.dropdownItem}>{item}</Text>
                          </TouchableOpacity>
                        )}
                      />
                    )}
                  </View>
                </View>

                <Button
                    mode="contained"
                    onPress={handleRegister}
                    style={styles.customBtn}
                  >
                    Registrarse
                  </Button>
              </>
            )}
          </View>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

export default RegisterScreen;
