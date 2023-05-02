import { Router } from "express";
import {
  getAllRoles,
  postRoles,
  putRoles,
  deleteRoles,
} from "../controllers/roles.js";
import { limiter } from "../middlewares/range-time.js";

const rolesRouter = Router();

rolesRouter.get("/all", getAllRoles);

rolesRouter.post("/create", limiter, postRoles);

rolesRouter.put("/update/:id", limiter, putRoles);

rolesRouter.delete("/delete/:id", limiter, deleteRoles);

export default rolesRouter;