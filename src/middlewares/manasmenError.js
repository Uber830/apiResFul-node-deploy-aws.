import { Router } from "express";
const appError = Router();

export default appError.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
