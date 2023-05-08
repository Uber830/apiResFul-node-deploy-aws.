import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerHandler from "./routers/home.js";

const app = express();
const PORT = process.env["PORT"];

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//router
app.use("/api", routerHandler);

export { PORT, app };
