const db = require('../config/firebaseConfig');

// Reference to the 'mahasiswa' node in the database
const mahasiswaRef = db.ref('mahasiswa');

// Create a new student
exports.createMahasiswa = (req, res) => {
  const { npm, nama, kelas } = req.body;
  if (!npm || !nama || !kelas) {
    return res.status(400).json({ message: 'Invalid input data' });
  }

  mahasiswaRef.child(npm).set({ nama, kelas }, (error) => {
    if (error) {
      return res.status(500).json({ message: 'Error saving data', error });
    }
    res.status(201).json({ message: 'Mahasiswa created successfully' });
  });
};

// Get all students
exports.getMahasiswa = (req, res) => {
  mahasiswaRef.once('value', (snapshot) => {
    res.status(200).json(snapshot.val());
  }, (error) => {
    res.status(500).json({ message: 'Error fetching data', error });
  });
};

// Update a student by npm
exports.updateMahasiswa = (req, res) => {
  const { npm } = req.params;
  const { nama, kelas } = req.body;

  mahasiswaRef.child(npm).update({ nama, kelas }, (error) => {
    if (error) {
      return res.status(500).json({ message: 'Error updating data', error });
    }
    res.status(200).json({ message: 'Mahasiswa updated successfully' });
  });
};

// Delete a student by npm
exports.deleteMahasiswa = (req, res) => {
  const { npm } = req.params;

  mahasiswaRef.child(npm).remove((error) => {
    if (error) {
      return res.status(500).json({ message: 'Error deleting data', error });
    }
    res.status(200).json({ message: 'Mahasiswa deleted successfully' });
  });
};