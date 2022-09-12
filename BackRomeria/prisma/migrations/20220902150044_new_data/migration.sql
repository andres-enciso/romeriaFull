/*
  Warnings:

  - You are about to drop the `GetAllForms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `GetAllForms` DROP FOREIGN KEY `GetAllForms_fPCivilId_fkey`;

-- DropForeignKey
ALTER TABLE `GetAllForms` DROP FOREIGN KEY `GetAllForms_fcontrsId_fkey`;

-- DropTable
DROP TABLE `GetAllForms`;

-- CreateTable
CREATE TABLE `Getallforms` (
    `fcontrsId` INTEGER NOT NULL,
    `fPCivilId` INTEGER NOT NULL,

    PRIMARY KEY (`fcontrsId`, `fPCivilId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Getallforms` ADD CONSTRAINT `Getallforms_fcontrsId_fkey` FOREIGN KEY (`fcontrsId`) REFERENCES `Formconstruccion`(`idConstruccion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Getallforms` ADD CONSTRAINT `Getallforms_fPCivilId_fkey` FOREIGN KEY (`fPCivilId`) REFERENCES `Formpcivil`(`idPCivil`) ON DELETE RESTRICT ON UPDATE CASCADE;
