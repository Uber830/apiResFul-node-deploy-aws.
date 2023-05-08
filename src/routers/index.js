import { Router } from "express";
import { general, home } from "../controllers/index.js";

const appIndex = Router();

appIndex.get("/", general);

appIndex.get("/home", home);

export default appIndex;
