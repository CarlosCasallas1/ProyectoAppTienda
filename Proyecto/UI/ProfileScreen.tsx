import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { useProfile } from '../src/context/ProfileContext';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import styles from '../src/styles/ProfileStyles'; // Usando estilos existentes

type ProfileScreenProps = {
  route: RouteProp<RootStackParamList, 'ProfileScreen'>;
  navigation: StackNavigationProp<RootStackParamList, 'ProfileScreen'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
  const { username } = route.params;
  const { profiles, selectedProfile, setSelectedProfile } = useProfile();

  useEffect(() => {
    const userProfile = profiles.find(profile => profile.firstName.toLowerCase() === username.toLowerCase());
    setSelectedProfile(userProfile || null);
  }, [profiles, username, setSelectedProfile]);

  if (!selectedProfile) {
    return (
      <View style={styles.container}>
        <Text>No profiles available.</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../src/images/Fondo.jpg')} // Imagen de fondo
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: selectedProfile.profilePicture }} // Aquí se muestra la imagen del perfil
            style={styles.profileImage}
          />
          <Text style={styles.name}>
            {selectedProfile.firstName} {selectedProfile.lastName}
          </Text>
          <Text style={styles.birthDate}>
            Fecha de nacimiento: {selectedProfile.birthDate}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
