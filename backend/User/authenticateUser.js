// Importa las dependencias necesarias
const express = require('express');
const db = require('./firebaseconfig'); // Importa Firestore desde firebaseconfig.js

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Función de autenticación
const authenticateUser = async (firstName, password) => {
  try {
    // Busca el documento en la colección "Profile"
    const snapshot = await db.collection('Profile').where('firstName', '==', firstName).get();

    if (snapshot.empty) {
      return { success: false, message: 'Usuario no encontrado.' };
    }

    let userExists = false;

    // Recorre los documentos encontrados
    snapshot.forEach(doc => {
      const userData = doc.data();
      // Verifica si la contraseña coincide
      if (userData.password === password) {
        userExists = true;
      }
    });

    if (userExists) {
      return { success: true, message: 'Inicio de sesión exitoso.' };
    } else {
      return { success: false, message: 'Contraseña incorrecta.' };
    }
  } catch (error) {
    console.error('Error al autenticar el usuario: ', error);
    return { success: false, message: 'Error en el proceso de autenticación.' };
  }
};

// Endpoint para autenticación de usuario
app.post('/api/authenticate', async (req, res) => {
  const { firstName, password } = req.body;

  // Validación de entrada
  if (!firstName || !password) {
    return res.status(400).json({ success: false, message: 'Nombre de usuario y contraseña son requeridos.' });
  }

  // Llama a la función de autenticación
  const result = await authenticateUser(firstName, password);
  res.json(result); // Devuelve el resultado como respuesta
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
