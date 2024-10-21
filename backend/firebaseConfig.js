const admin = require('firebase-admin');
const serviceAccount = require('./config/bdproyectot1-firebase-adminsdk-syl6o-f064a7b32c.json');

// Inicializar la app de Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Inicializar Firestore
const db = admin.firestore();

module.exports = db;
