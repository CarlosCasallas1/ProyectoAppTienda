const addProfile = async () => {
    const profileData = {
      birthDate: "1985/05/15",
      city: "Medellín",
      department: "Antioquia",
      email: "Juan@gmail.com"
    };
  
    try {
      const docRef = await db.collection('Profile').add(profileData);
      console.log('Documento agregado con ID: ', docRef.id);
    } catch (error) {
      console.error('Error al agregar el documento: ', error);
    }
  };
  
  addProfile();
  