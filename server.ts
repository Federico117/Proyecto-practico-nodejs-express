import express, { Request, Response } from "express";
//import usersRouter from "./routes/user";
//import adminRouter from "./routes/admin";
import { usersRouter, authRouter, adminRouter } from "./routes/index";
import dbConnect from "./db/dbConnect";

const PORT = 3000;
const HOST = "localhost";

dbConnect();

const app = express();

app.use(express.json());

app.use("/user", usersRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

app.listen(PORT, HOST, () => {
  console.log(`El servidor esta corriendo en ${HOST}:${PORT}`);
});
