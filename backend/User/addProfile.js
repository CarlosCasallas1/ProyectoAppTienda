const addProfile = async (userData) => {
  const profileData = {
    firstName: userData.firstName,
    lastName: userData.lastName || '',
    email: userData.email,
    birthDate: userData.birthDate,
    password: userData.password,
    department: userData.department,
    city: userData.city,
    address: userData.address
  };

  try {
    const docRef = await db.collection('Profile').add(profileData); // No incluyas el campo 'id'
    console.log('Documento agregado con ID: ', docRef.id);
    return { success: true, message: 'Usuario registrado exitosamente.' };
  } catch (error) {
    console.error('Error al agregar el documento: ', error);
    return { success: false, message: 'Error al registrar el usuario.' };
  }
};



// const addProfile = async () => {
//     const profileData = {
//       birthDate: "1985/05/15",
//       city: "Medellín",
//       department: "Antioquia",
//       email: "Juan@gmail.com"
//     };
  
//     try {
//       const docRef = await db.collection('Profile').add(profileData);
//       console.log('Documento agregado con ID: ', docRef.id);
//     } catch (error) {
//       console.error('Error al agregar el documento: ', error);
//     }
//   };
  
//   addProfile();
  