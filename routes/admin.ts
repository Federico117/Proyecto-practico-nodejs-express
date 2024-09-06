import express, { Request, Response } from "express";

const adminRouter = express.Router();

function isAdmin(req: Request, res: Response, next: Function) {
  const { isAdmin } = req.body;
  if (isAdmin) {
    next();
  } else {
    res.status(401).send("Acceso no autorizado");
  }
}

adminRouter.get("/", isAdmin, (req: Request, res: Response) => {
  res.send("Bienvenido a la pagina de admin");
});

adminRouter.get("/dashboard", isAdmin, (req: Request, res: Response) => {
  res.send("Welcome to the admin dashboard");
});

export default adminRouter;
