const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const app = express();

const corsOptions = {
  origin: [
    'https://tu-frontend.vercel.app',
    'http://localhost:5500'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', userRoutes);

module.exports = app;