import { Router } from "express";
import { createArtiste } from "../modules/artiste/useCases/createArtiste";
import multer from "multer";
import { multerConfig } from "../config/multer";

const artisteRouter = Router();

artisteRouter.post(
  "/signup",
  multer(multerConfig).single("image"),
  (req, res) => {
    return createArtiste.handle(req, res);
  }
);

export { artisteRouter };
