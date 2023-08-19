-- CreateTable
CREATE TABLE `ItemAlbum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `album_id` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ItemAlbum` ADD CONSTRAINT `ItemAlbum_album_id_fkey` FOREIGN KEY (`album_id`) REFERENCES `Album`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
