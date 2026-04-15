const express = require('express')
const cors = require('cors')
const connectDB = require('./connection/db')
const authRoutes = require('./routes/userRoutes')

require('dotenv').config()
connectDB()

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);


const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));