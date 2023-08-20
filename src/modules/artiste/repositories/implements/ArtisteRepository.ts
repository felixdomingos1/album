import { Artiste } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { IArtisteRepository, ICreateArtisteDTO } from "../IArtisteRepository";

class ArtisteRepository implements IArtisteRepository {
  async create({
    name,
    email,
    password_hash,
    profile_image,
  }: ICreateArtisteDTO): Promise<Artiste> {
    const artiste = await prismaClient.artiste.create({
      data: { name, email, password_hash, profile_image },
    });

    return artiste;
  }

  async findByEmail(email: string): Promise<Artiste> {
    const artiste = await prismaClient.artiste.findUnique({
      where: { email },
    });

    return artiste;
  }

  async findById(id: number): Promise<Artiste> {
    const artiste = await prismaClient.artiste.findFirst({
      where: { id },
    });

    return artiste;
  }
}

export { ArtisteRepository };
