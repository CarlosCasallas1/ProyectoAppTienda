// Importaciones de dependencias
const express = require('express');
const cors = require('cors');
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
    const snapshot = await db.collection('Profile').where('firstName', '==', firstName).get();
    if (snapshot.empty) {
      return { success: false, message: 'Usuario no encontrado.' };
    }
    let userExists = false;
    snapshot.forEach(doc => {
      const userData = doc.data();
      if (userData.password === password) {
        userExists = true;
      }
    });
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
  if (typeof firstName !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ success: false, message: 'Formato de entrada inválido.' });
  }
  const result = await authenticateUser(firstName, password);
  res.json(result);
});

// Función para agregar un perfil (registro de usuario)
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
    const docRef = await db.collection('Profile').add(profileData);
    console.log('Documento agregado con ID: ', docRef.id);
    return { success: true, message: 'Usuario registrado exitosamente.' };
  } catch (error) {
    console.error('Error al agregar el documento: ', error);
    return { success: false, message: 'Error al registrar el usuario.' };
  }
};

// Endpoint para registrar un usuario
app.post('/api/register', async (req, res) => {
  const userData = req.body;

  // Validar que se proporcionen los campos necesarios
  if (!userData.firstName || !userData.email || !userData.password) {
    return res.status(400).json({ success: false, message: 'Faltan datos obligatorios.' });
  }

  // Llama a addProfile para agregar el nuevo perfil
  const result = await addProfile(userData);
  
  // Responde con el resultado
  res.json(result);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});