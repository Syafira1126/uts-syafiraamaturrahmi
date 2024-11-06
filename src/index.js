const express = require('express');
const mahasiswaRoutes = require('../routes/mahasiswaRoutes'); // Pastikan ini terhubung dengan benar

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk cek body kosong
app.use((req, res, next) => {
    if ((req.method === 'POST' || req.method === 'PUT') && (!req.body || Object.keys(req.body).length === 0)) {
        return res.status(400).json({ error: "Request body is empty or missing" });
    }
    next();
});

// Middleware untuk menangani error JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error("Invalid JSON payload:", err.message);
        return res.status(400).json({ error: "Invalid JSON payload" });
    }
    next();
});

// Gunakan routes
app.use('/api', mahasiswaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
