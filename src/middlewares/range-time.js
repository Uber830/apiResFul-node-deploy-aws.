import { rateLimit } from "express-rate-limit";
import { Response } from "../helpers/response.js";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // one minutes
  max: 6, // maximum number of requests
  handler: (req, res) => {
    Response.times(res);
  },
});