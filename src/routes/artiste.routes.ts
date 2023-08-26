import { Router } from "express";
import { createArtiste } from "../modules/artiste/useCases/createArtiste";
import multer from "multer";
import { multerConfig } from "../config/multer";
import { createSession } from "../modules/artiste/useCases/createSession";

const artisteRouter = Router();

artisteRouter.post(
  "/signup",
  multer(multerConfig).single("image"),
  (req, res) => {
    return createArtiste.handle(req, res);
  }
);

artisteRouter.post("/signin", (req, res) => {
  return createSession.handle(req, res);
});

export { artisteRouter };
