import { Request, Response } from "express";
import User from "../models/user";
import { compare } from "bcrypt";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "Usuario que intenta registrar ya existe" });
      }
      const newUser = await User.create(req.body);
      console.log(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async login(req: Request, res: Response) {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      console.log("El usuario encontrado es: ", user);
      if (!user) {
        return res.status(400).json({ error: "El usuario no existe" });
      }
      const isPasswordValid = await compare(password, user.password);
      console.log("Es la contraseña valida? ", isPasswordValid);
      if (!isPasswordValid) {
        return res.status(400).json({ error: "La contraseña es incorrecta" });
      }
      return res.status(200).json({ mensaje: "Sesion iniciada exitosamente" });
    } catch (error) {}
  }
}

export const authController = new AuthController();
