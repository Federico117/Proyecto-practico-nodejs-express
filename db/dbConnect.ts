import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
}
