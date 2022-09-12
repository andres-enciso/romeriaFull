-- CreateTable
CREATE TABLE `GetAllForms` (
    `fcontrsId` INTEGER NOT NULL,
    `fPCivilId` INTEGER NOT NULL,

    PRIMARY KEY (`fcontrsId`, `fPCivilId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GetAllForms` ADD CONSTRAINT `GetAllForms_fcontrsId_fkey` FOREIGN KEY (`fcontrsId`) REFERENCES `Formconstruccion`(`idConstruccion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GetAllForms` ADD CONSTRAINT `GetAllForms_fPCivilId_fkey` FOREIGN KEY (`fPCivilId`) REFERENCES `Formpcivil`(`idPCivil`) ON DELETE RESTRICT ON UPDATE CASCADE;
