const updateProfile = async (docId) => {
    const updatedData = {
      city: "Bogotá" // Cambiar la ciudad
    };
  
    try {
      await db.collection('Profile').doc(docId).update(updatedData);
      console.log('Documento actualizado');
    } catch (error) {
      console.error('Error al actualizar el documento: ', error);
    }
  };
  
  // Reemplaza 'documentId' con el ID del documento que deseas actualizar
  updateProfile('documentId');
  