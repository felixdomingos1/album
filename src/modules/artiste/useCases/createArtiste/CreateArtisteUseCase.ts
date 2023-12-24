import { IArtisteRepository, ICreateArtisteUseCaseDTO } from "../../repositories/IArtisteRepository";
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
    const isEmailExists = await this.artisteRepository.findByEmail(email);

    if (isEmailExists) {
      throw new AppError("Unauthorized Contact!", 400);
    }

    const passwordHash = await hash(password, 8);

    const artiste = await this.artisteRepository.create({
      name,
      email,
      password_hash: passwordHash,
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
