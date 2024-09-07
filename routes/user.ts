import express, { Request, Response } from "express";
import { userController } from "../controllers/user-controller";

const usersRouter = express.Router();

const usuarios = [
  { nombre: "Carlos", apellido: "Gonzalez" },
  { nombre: "Federico", apellido: "Valdez" },
  { nombre: "Sebastian", apellido: "Bustamante" },
];

//usersRouter.get("/", (req: Request, res: Response) => {
//  res.send("Hello World");
//});

usersRouter.post("/user", userController.createUser);

usersRouter.get("/", userController.getUsers);

usersRouter.get("/:id", userController.getOneUser);

usersRouter.delete("/:id", userController.deleteUser);

export default usersRouter;
