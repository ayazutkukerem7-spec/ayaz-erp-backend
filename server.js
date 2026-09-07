const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Render ve Electron durum kontrol noktasi
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'online', 
        message: 'Ayaz ERP Sunucusu Aktif',
        timestamp: new Date()
    });
});

app.get('/', (req, res) => {
    res.send('Ayaz ERP Backend Calisiyor!');
});

// Render'in atayacagi dinamik port
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Ayaz ERP Sunucusu ${PORT} portunda aktif!`);
});