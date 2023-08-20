import {
  IArtisteRepository,
  ICreateArtisteUseCaseDTO,
} from "../../repositories/IArtisteRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { createTokenService } from "../../../../services/createTokenService";

interface ICreateArtisteResponse {
  token: string;
  name: string;
  email: string;
  profile_image: string;
}

class CreateArtisteUseCase {
  constructor(private artisteRepository: IArtisteRepository) {}

  async execute({
    name,
    email,
    password,
    profile_image,
  }: ICreateArtisteUseCaseDTO): Promise<ICreateArtisteResponse> {
    const email_existe = await this.artisteRepository.findByEmail(email);

    if (email_existe) throw new AppError("Contacto não autorizado!", 400);

    const password_hash = await hash(password, 8);

    const artiste = await this.artisteRepository.create({
      name,
      email,
      password_hash,
      profile_image,
    });

    const token = createTokenService(artiste.id);

    return {
      token,
      name: artiste.name,
      email: artiste.email,
      profile_image: artiste.profile_image,
    };
  }
}

export { CreateArtisteUseCase };
