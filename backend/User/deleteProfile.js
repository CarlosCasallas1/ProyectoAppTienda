const deleteProfile = async (docId) => {
    try {
      await db.collection('Profile').doc(docId).delete();
      console.log('Documento eliminado');
    } catch (error) {
      console.error('Error al eliminar el documento: ', error);
    }
  };
  
  // Reemplaza 'documentId' con el ID del documento que deseas eliminar
  deleteProfile('documentId');
  