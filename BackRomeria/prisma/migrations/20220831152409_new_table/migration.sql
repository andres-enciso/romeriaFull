-- CreateTable
CREATE TABLE `Usersforms` (
    `userId` INTEGER NOT NULL,
    `constId` INTEGER NOT NULL,
    `pcivilId` INTEGER NOT NULL,
    `innovId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `constId`, `pcivilId`, `innovId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usersforms` ADD CONSTRAINT `Usersforms_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usersforms` ADD CONSTRAINT `Usersforms_constId_fkey` FOREIGN KEY (`constId`) REFERENCES `Formconstruccion`(`idConstruccion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usersforms` ADD CONSTRAINT `Usersforms_pcivilId_fkey` FOREIGN KEY (`pcivilId`) REFERENCES `Formpcivil`(`idPCivil`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usersforms` ADD CONSTRAINT `Usersforms_innovId_fkey` FOREIGN KEY (`innovId`) REFERENCES `Forminnovacion`(`idInnovacion`) ON DELETE RESTRICT ON UPDATE CASCADE;
