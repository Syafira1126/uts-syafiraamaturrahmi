const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.post('/mahasiswa', mahasiswaController.createMahasiswa);
router.get('/mahasiswa', mahasiswaController.getMahasiswa);
router.put('/mahasiswa/:npm', mahasiswaController.updateMahasiswa);
router.delete('/mahasiswa/:npm', mahasiswaController.deleteMahasiswa);


module.exports = router;
