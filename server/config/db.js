import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log('Connecting to MONGODB...');
    
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connected to MONGODB');
  } catch (error) {
    console.error('Error connecting to MONGODB:', error.message);

    process.exit(1);
  }
}

export default connectDB;