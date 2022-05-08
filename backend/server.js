const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errroHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the support desk api' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use(errroHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));