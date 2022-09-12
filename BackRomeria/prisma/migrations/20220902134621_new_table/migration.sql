/*
  Warnings:

  - Added the required column `formsconts` to the `Formdif` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formsconts` to the `Formsalud` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Formaguadrenaje` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formalumbrado` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formanalisisestrategico` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formaseopublico` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formconservacion` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formconstruccion` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formdif` ADD COLUMN `formsconts` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Forminnovacion` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Forminspeccionvig` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formmejoramientourbano` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formpcivil` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formrecaudadora` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formsalud` ADD COLUMN `formsconts` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formseguridadpublica` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formsindicatura` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- AlterTable
ALTER TABLE `Formtianguis` ADD COLUMN `formscontestadosIdForms` INTEGER NULL;

-- CreateTable
CREATE TABLE `Formscontestados` (
    `idForms` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`idForms`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Formsalud` ADD CONSTRAINT `Formsalud_formsconts_fkey` FOREIGN KEY (`formsconts`) REFERENCES `Formscontestados`(`idForms`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formdif` ADD CONSTRAINT `Formdif_formsconts_fkey` FOREIGN KEY (`formsconts`) REFERENCES `Formscontestados`(`idForms`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formseguridadpublica` ADD CONSTRAINT `Formseguridadpublica_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminspeccionvig` ADD CONSTRAINT `Forminspeccionvig_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formtianguis` ADD CONSTRAINT `Formtianguis_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formrecaudadora` ADD CONSTRAINT `Formrecaudadora_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formalumbrado` ADD CONSTRAINT `Formalumbrado_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaseopublico` ADD CONSTRAINT `Formaseopublico_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaguadrenaje` ADD CONSTRAINT `Formaguadrenaje_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formanalisisestrategico` ADD CONSTRAINT `Formanalisisestrategico_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formsindicatura` ADD CONSTRAINT `Formsindicatura_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formmejoramientourbano` ADD CONSTRAINT `Formmejoramientourbano_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formconservacion` ADD CONSTRAINT `Formconservacion_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminnovacion` ADD CONSTRAINT `Forminnovacion_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formpcivil` ADD CONSTRAINT `Formpcivil_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formconstruccion` ADD CONSTRAINT `Formconstruccion_formscontestadosIdForms_fkey` FOREIGN KEY (`formscontestadosIdForms`) REFERENCES `Formscontestados`(`idForms`) ON DELETE SET NULL ON UPDATE CASCADE;
