const admin = require('firebase-admin');
const serviceAccount = require('./uts-syafiraamaturrahmi-firebase-adminsdk-b9fpj-590fd04b9e.json'); // Referensi ke file JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uts-syafiraamaturrahmi-default-rtdb.firebaseio.com/" // Ganti dengan URL database Firebase Anda
});

const db = admin.database();
module.exports = db;
