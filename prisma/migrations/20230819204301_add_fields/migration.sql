/*
  Warnings:

  - Added the required column `cover_photo` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `Artiste` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_image` to the `Artiste` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `album` ADD COLUMN `cover_photo` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `artiste` ADD COLUMN `password_hash` VARCHAR(191) NOT NULL,
    ADD COLUMN `profile_image` VARCHAR(255) NOT NULL;
