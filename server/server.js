import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();  

app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.post('/signup', (req, res)=>{
  console.log(req.body);

  const {name, username, password} = req.body;

  if (!name || !username || !password) {
    return res.status(400).send('All fields are required');
  }

  res.send('Signup route is working!');
})

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})