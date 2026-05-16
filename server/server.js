const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'PMAY-G API Running Successfully',
    });
});

app.post('/api/login', (req, res) => {
    const { userId, password } = req.body;

    if (userId === 'admin' && password === '123456') {
        return res.json({
            success: true,
            message: 'Login successful',
        });
    }

    res.status(401).json({
        success: false,
        message: 'Invalid credentials',
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});