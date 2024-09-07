import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const newUser = await User.create(req.body);
      console.log(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      console.log("Ocurrio un error");
    }
  }

  async getOneUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await User.findById(id);
      res.status(200).send(usuario);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    console.log(req.params);
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(201).json(deletedUser);
    } catch (error) {
      console.log(error);
    }
  }
}

export const userController = new UserController();
