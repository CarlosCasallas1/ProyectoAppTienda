// Importaciones de dependencias
const express = require('express');
const cors = require('cors');  // Mover cors a la parte superior
const db = require('./firebaseConfig'); // Importa Firestore desde firebaseconfig.js

// Inicialización de la aplicación
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors()); // Habilita CORS para todas las rutas

// Función de autenticación de usuario
const authenticateUser = async (firstName, password) => {
  try {
    // Consultar en la colección 'Profile' el documento donde el 'firstName' coincida
    const snapshot = await db.collection('Profile').where('firstName', '==', firstName).get();

    // Si no se encuentra ningún documento, devolver mensaje de error
    if (snapshot.empty) {
      return { success: false, message: 'Usuario no encontrado.' };
    }

    // Verificar la contraseña
    let userExists = false;
    snapshot.forEach(doc => {
      const userData = doc.data();
      if (userData.password === password) {
        userExists = true;
      }
    });

    // Retornar el resultado según si la contraseña es correcta o no
    return userExists
      ? { success: true, message: 'Inicio de sesión exitoso.' }
      : { success: false, message: 'Contraseña incorrecta.' };
    
  } catch (error) {
    console.error('Error al autenticar el usuario: ', error);
    return { success: false, message: 'Error en el proceso de autenticación.' };
  }
};

// Endpoint para autenticación de usuario
app.post('/api/authenticate', async (req, res) => {
  const { firstName, password } = req.body;

  // Validar que el formato de entrada sea el correcto
  if (typeof firstName !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ success: false, message: 'Formato de entrada inválido.' });
  }

  // Llamar a la función de autenticación y enviar el resultado como respuesta
  const result = await authenticateUser(firstName, password);
  res.json(result);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
