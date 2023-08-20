import { ArtisteRepository } from "../../repositories/implements/ArtisteRepository";
import { CreateArtisteController } from "./CreateArtisteController";
import { CreateArtisteUseCase } from "./CreateArtisteUseCase";

const artisteRepository = new ArtisteRepository();
const createArtisteUseCase = new CreateArtisteUseCase(artisteRepository);
const createArtiste = new CreateArtisteController(createArtisteUseCase);

export { createArtiste };
