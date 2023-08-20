import { Router } from "express";
import { artisteRouter } from "./artiste.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "OK!" });
});

routes.use("/artiste", artisteRouter);

export { routes };
