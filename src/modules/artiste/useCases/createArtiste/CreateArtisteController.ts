import { Request, Response } from "express";
import { CreateArtisteUseCase } from "./CreateArtisteUseCase";
import esquema from "../../../../schemas/createArtiste";

class CreateArtisteController {
  constructor(private createArtisteUseCase: CreateArtisteUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const image = req.file;
    const { name, email, password } = req.body;

    if (
      !(await esquema.isValid({
        image,
        name,
        email,
        password,
      }))
    )
      throw new Error("Dados inválidos!");

    const artiste = await this.createArtisteUseCase.execute({
      name,
      email,
      password,
      profile_image: image.filename,
    });

    return res.status(201).json(artiste);
  }
}

export { CreateArtisteController };
