// src/backend/User/addProfile.js
import { db } from '../../firebaseConfig'; // Ajusta la ruta según tu estructura de carpetas
import { collection, addDoc } from 'firebase/firestore';

const addProfile = async (userData) => {
  const profileData = {
    firstName: userData.firstName,
    lastName: userData.lastName || '',
    email: userData.email,
    birthDate: userData.birthDate,
    password: userData.password,
    department: userData.department,
    city: userData.city,
    address: userData.address,
  };

  try {
    const docRef = await addDoc(collection(db, 'Profile'), profileData);
    console.log('Documento agregado con ID: ', docRef.id);
    return { success: true, message: 'Usuario registrado exitosamente.' };
  } catch (error) {
    console.error('Error al agregar el documento: ', error);
    return { success: false, message: 'Error al registrar el usuario.' };
  }
};

export default addProfile;
