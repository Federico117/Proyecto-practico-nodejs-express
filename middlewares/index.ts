import { Request, Response } from "express";

export function isAdmin(req: Request, res: Response, next: Function) {
  const isAdmin = req.body.isAdmin;
  if (isAdmin) {
    next();
  } else {
    res.status(401).send("No tienes autorizado el acceso gil");
  }
}
