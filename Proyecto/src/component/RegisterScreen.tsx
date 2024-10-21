import React, { useState } from 'react';
import { View, Text, ImageBackground, Alert, FlatList, TouchableOpacity } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
import styles from '../styles/RegisterScreenStyles';
import { Profiles, UserProfile } from '../../UI/Profile'; // Asegúrate de importar el arreglo Profiles y la interfaz UserProfile

const cities: { [key in 'Antioquia' | 'Cundinamarca' | 'Valle del Cauca' | 'Atlántico']: string[] } = {
  Antioquia: ['Medellín', 'Envigado', 'Itagüí', 'Bello', 'Rionegro'],
  Cundinamarca: ['Bogotá', 'Soacha', 'Chía', 'Zipaquirá', 'Facatativá'],
  'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Cartago'],
  Atlántico: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Galapa'],
};

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cityDropdownVisible, setCityDropdownVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUser = (user: string) => {
    return user.length <= 10;
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateAddress = (address: string) => {
    return address.length <= 30;
  };

  const validateBirthDate = (dateString: string) => {
    const birthDate = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (birthDate > today || isNaN(birthDate.getTime())) return false;
    if (age < 18 || age > 50 || (age === 50 && monthDiff > 0)) return false;

    return true;
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
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

    // Generar un nuevo ID basado en la longitud del arreglo existente
    const newId = Profiles.length + 1;

    // Crear un nuevo perfil
    const newProfile: UserProfile = {
      id: newId,
      firstName: user, // Aquí asumo que el 'usuario' es el nombre
      lastName: '', // Puedes agregar un campo para el apellido si lo deseas
      email,
      birthDate,
      profilePicture: 'https://img.freepik.com/vector-gratis/avatares-anonimos-circulos-grises_78370-2086.jpg', 
      password,
      department,
      city,
    };

    // Agregar el nuevo perfil al arreglo Profiles
    Profiles.push(newProfile);

    setIsRegistered(true);
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
                <Text>Usuario: {user}</Text>
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
                      value={user}
                      onChangeText={setUser}
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
                      secureTextEntry={true}
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
                      placeholder="AAAA-MM-DD"
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
                      maxLength={30} // Limitar a 30 caracteres
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Departamento:</Text>
                    <TouchableOpacity
                      onPress={() => setDropdownVisible(!dropdownVisible)}
                      style={styles.textInput}
                    >
                      <Text style={{ color: department ? 'black' : '#888', fontSize: 17 }}>
                        {department || 'Seleccione'}
                      </Text>
                    </TouchableOpacity>

                    {dropdownVisible && (
                      <View style={styles.dropdownContainer}>
                        <FlatList
                          data={departmentOptions}
                          keyExtractor={(item) => item.value}
                          renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => selectDepartment(item.label)}>
                              <Text style={styles.dropdownItem}>{item.label}</Text>
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                    )}
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Ciudad:</Text>
                    <TouchableOpacity
                      onPress={() => setCityDropdownVisible(!cityDropdownVisible)}
                      style={styles.textInput}
                    >
                      <Text style={{ color: city ? 'black' : '#888', fontSize: 18 }}>
                        {city || 'Seleccione'}
                      </Text>
                    </TouchableOpacity>

                    {cityDropdownVisible && (
                      <View style={styles.dropdownContainer}>
                        <FlatList
                          data={availableCities}
                          keyExtractor={(item) => item}
                          renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => selectCity(item)}>
                              <Text style={styles.dropdownItem}>{item}</Text>
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                    )}
                  </View>

                  <Button
                    mode="contained"
                    onPress={handleRegister}
                    style={styles.customBtn}
                  >
                    Registrarse
                  </Button>
                </View>
              </>
            )}
          </View>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

export default RegisterScreen;
