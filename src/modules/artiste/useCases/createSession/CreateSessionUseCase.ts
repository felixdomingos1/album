import { createTokenService } from "../../../../services/createTokenService";
import { IArtisteRepository } from "../../repositories/IArtisteRepository";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";

interface Session {
  token: string;
  name: string;
  email: string;
  image: string;
}

class CreateSessionUseCase {
  constructor(private artisteRepository: IArtisteRepository) {}

  async execute(email: string, password: string): Promise<Session> {
    const artiste = await this.artisteRepository.findByEmail(email);

    if (!artiste) throw new AppError("Email ou password inválida!", 401);

    const passwordValid = await compare(password, artiste.password_hash);

    if (!passwordValid) throw new AppError("Email ou password inválida!", 401);

    const token = createTokenService(artiste.id);

    return {
      token,
      name: artiste.name,
      email: artiste.email,
      image: artiste.profile_image,
    };
  }
}

export { CreateSessionUseCase };
