import { Artiste } from "@prisma/client";

interface ICreateArtisteDTO {
  email: string;
  name: string;
  password_hash: string;
  profile_image: string;
}

interface ICreateArtisteUseCaseDTO {
  email: string;
  name: string;
  password: string;
  profile_image: string;
}

interface IArtisteRepository {
  create({
    name,
    email,
    password_hash,
    profile_image,
  }: ICreateArtisteDTO): Promise<Artiste>;
  findByEmail(email: string): Promise<Artiste>;
  findById(id: number): Promise<Artiste>;
}

export { IArtisteRepository, ICreateArtisteDTO, ICreateArtisteUseCaseDTO };
