const updateProfile = async (firstName, updatedData) => {
    try {
      // Busca el documento en la colección "Profile" por firstName
      const snapshot = await db.collection('Profile').where('firstName', '==', firstName).get();
  
      if (snapshot.empty) {
        return { success: false, message: 'Usuario no encontrado.' };
      }
  
      // Recorre los documentos encontrados y actualiza el primero que encuentre
      snapshot.forEach(async (doc) => {
        await db.collection('Profile').doc(doc.id).update(updatedData);
        console.log(`Documento ${doc.id} actualizado con éxito.`);
      });
  
      return { success: true, message: 'Perfil actualizado con éxito.' };
    } catch (error) {
      console.error('Error al actualizar el perfil: ', error);
      return { success: false, message: 'Error al actualizar el perfil.' };
    }
  };
  
  // Ejemplo de uso
  const firstNameToUpdate = 'Juan'; // Reemplaza con el nombre del usuario que deseas actualizar
  const newProfileData = {
    city: 'Bogotá',        // Nuevos datos que deseas actualizar
    department: 'Cundinamarca',
    email: 'juan.nuevo@gmail.com'
  };
  
  updateProfile(firstNameToUpdate, newProfileData)
    .then(result => {
      console.log(result.message); // Muestra el mensaje de éxito o error
    });
  