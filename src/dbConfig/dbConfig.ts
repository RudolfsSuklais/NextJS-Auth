import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
export async function connect(){
 try {
  mongoose.connect(process.env.MONGO_URI!);
  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Connected to MongoDB');
  })

  connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit();
  })


 } catch (error) {
  console.log('Something went wrong!');
  console.log(error);
  
 }
}