import express, { Request, Response } from "express";
import { userController } from "../controllers/controller";

const usersRouter = express.Router();

const usuarios = [
  { nombre: "Carlos", apellido: "Gonzalez" },
  { nombre: "Federico", apellido: "Valdez" },
  { nombre: "Sebastian", apellido: "Bustamante" },
];

usersRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

usersRouter.post("/user", userController.createUser);

usersRouter.get("/user-settings", (req: Request, res: Response) => {
  res.send("User Setting");
});

export default usersRouter;
