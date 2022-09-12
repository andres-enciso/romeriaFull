/*
  Warnings:

  - You are about to drop the `Form2Salud` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Form2Salud` DROP FOREIGN KEY `Form2Salud_tipodependencia_fkey`;

-- DropTable
DROP TABLE `Form2Salud`;

-- CreateTable
CREATE TABLE `FormSalud` (
    `idPreguntasSalud` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadDeshidratacion` INTEGER NOT NULL,
    `msjDeshidratacion` VARCHAR(191) NOT NULL,
    `cantidadHipertension` INTEGER NOT NULL,
    `msjHipertension` VARCHAR(191) NOT NULL,
    `cantidadInfartoMiocardio` INTEGER NOT NULL,
    `msjInfartoMiocardio` VARCHAR(191) NOT NULL,
    `cantidadConvulsivos` INTEGER NOT NULL,
    `msjConvulsivos` VARCHAR(191) NOT NULL,
    `cantidadEnfRespiratoria` INTEGER NOT NULL,
    `msjEnfRespiratoria` VARCHAR(191) NOT NULL,
    `cantidadEnfGatrointestinal` INTEGER NOT NULL,
    `msjEnfGatrointestinal` VARCHAR(191) NOT NULL,
    `cantidadFebrilesExa` INTEGER NOT NULL,
    `msjFebrilesExa` VARCHAR(191) NOT NULL,
    `cantidadCefaleas` INTEGER NOT NULL,
    `msjCefaleas` VARCHAR(191) NOT NULL,
    `cantidadDiabetico` INTEGER NOT NULL,
    `msjDiabetico` VARCHAR(191) NOT NULL,
    `cantidadIntoxicacion` INTEGER NOT NULL,
    `msjIntoxicacion` VARCHAR(191) NOT NULL,
    `cantidadCaidas` INTEGER NOT NULL,
    `msjCaidas` VARCHAR(191) NOT NULL,
    `cantidadQuemaduras` INTEGER NOT NULL,
    `msjQuemaduras` VARCHAR(191) NOT NULL,
    `cantidadAtropellado` INTEGER NOT NULL,
    `msjAtropellado` VARCHAR(191) NOT NULL,
    `cantidadChoque` INTEGER NOT NULL,
    `msjChoque` VARCHAR(191) NOT NULL,
    `cantidadVolcadura` INTEGER NOT NULL,
    `msjVolcadura` VARCHAR(191) NOT NULL,
    `cantidadMuscoloesqueletico` INTEGER NOT NULL,
    `msjMuscoloesqueletico` VARCHAR(191) NOT NULL,
    `cantidadArmablanca` INTEGER NOT NULL,
    `msjArmablanca` VARCHAR(191) NOT NULL,
    `cantidadArmadefuego` INTEGER NOT NULL,
    `msjArmadefuego` VARCHAR(191) NOT NULL,
    `cantidadOtros` INTEGER NOT NULL,
    `msjOtros` VARCHAR(191) NOT NULL,
    `cantidaPediatrico` INTEGER NOT NULL,
    `msjPediatrico` VARCHAR(191) NOT NULL,
    `cantidadAdultos` INTEGER NOT NULL,
    `msjAdultos` VARCHAR(191) NOT NULL,
    `cantidadAdultoMayor` INTEGER NOT NULL,
    `msjAdultoMayor` VARCHAR(191) NOT NULL,
    `cantidadFemenino` INTEGER NOT NULL,
    `msjFemenino` VARCHAR(191) NOT NULL,
    `cantidadMasculino` INTEGER NOT NULL,
    `msjMasculino` VARCHAR(191) NOT NULL,
    `cantidadIntermedio` INTEGER NOT NULL,
    `msjIntermedio` VARCHAR(191) NOT NULL,
    `cantidadTransladados` INTEGER NOT NULL,
    `msjTransladados` VARCHAR(191) NOT NULL,
    `oKPunto1` VARCHAR(191) NOT NULL,
    `msjPunto1` VARCHAR(191) NOT NULL,
    `oKPunto2` VARCHAR(191) NOT NULL,
    `msjPunto2` VARCHAR(191) NOT NULL,
    `oKPunto3` VARCHAR(191) NOT NULL,
    `msjPunto3` VARCHAR(191) NOT NULL,
    `oKPunto4` VARCHAR(191) NOT NULL,
    `msjPunto4` VARCHAR(191) NOT NULL,
    `oKPunto5` VARCHAR(191) NOT NULL,
    `msjPunto5` VARCHAR(191) NOT NULL,
    `oKPunto6` VARCHAR(191) NOT NULL,
    `msjPunto6` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `FormSalud_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPreguntasSalud`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FormSalud` ADD CONSTRAINT `FormSalud_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;
