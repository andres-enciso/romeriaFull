/*
  Warnings:

  - You are about to drop the column `tipodependencia` on the `Formaguadrenaje` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formalumbrado` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formanalisisestrategico` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formaseopublico` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formconservacion` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formdif` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Forminnovacion` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Forminspeccionvig` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formmejoramientourbano` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formpcivil` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formrecaudadora` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formsalud` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formseguridadpublica` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formsindicatura` table. All the data in the column will be lost.
  - You are about to drop the column `tipodependencia` on the `Formtianguis` table. All the data in the column will be lost.
  - Added the required column `tipodependenciaaguadrenaje` to the `Formaguadrenaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciaslumbrado` to the `Formalumbrado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciaanaestrategico` to the `Formanalisisestrategico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciaaseopub` to the `Formaseopublico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciaconservacion` to the `Formconservacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciadif` to the `Formdif` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciainnovacion` to the `Forminnovacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciainspeccion` to the `Forminspeccionvig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciamejoramiento` to the `Formmejoramientourbano` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciapcivil` to the `Formpcivil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciareca` to the `Formrecaudadora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciasalud` to the `Formsalud` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciasegpublica` to the `Formseguridadpublica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciasindicatura` to the `Formsindicatura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodependenciatianguis` to the `Formtianguis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Formaguadrenaje` DROP FOREIGN KEY `Formaguadrenaje_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formalumbrado` DROP FOREIGN KEY `Formalumbrado_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formanalisisestrategico` DROP FOREIGN KEY `Formanalisisestrategico_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formaseopublico` DROP FOREIGN KEY `Formaseopublico_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formconservacion` DROP FOREIGN KEY `Formconservacion_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formdif` DROP FOREIGN KEY `Formdif_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Forminnovacion` DROP FOREIGN KEY `Forminnovacion_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Forminspeccionvig` DROP FOREIGN KEY `Forminspeccionvig_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formmejoramientourbano` DROP FOREIGN KEY `Formmejoramientourbano_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formpcivil` DROP FOREIGN KEY `Formpcivil_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formrecaudadora` DROP FOREIGN KEY `Formrecaudadora_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formsalud` DROP FOREIGN KEY `Formsalud_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formseguridadpublica` DROP FOREIGN KEY `Formseguridadpublica_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formsindicatura` DROP FOREIGN KEY `Formsindicatura_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Formtianguis` DROP FOREIGN KEY `Formtianguis_tipodependencia_fkey`;

-- AlterTable
ALTER TABLE `Formaguadrenaje` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciaaguadrenaje` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formalumbrado` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciaslumbrado` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formanalisisestrategico` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciaanaestrategico` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formaseopublico` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciaaseopub` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formconservacion` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciaconservacion` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formdif` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciadif` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Forminnovacion` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciainnovacion` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Forminspeccionvig` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciainspeccion` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formmejoramientourbano` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciamejoramiento` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formpcivil` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciapcivil` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formrecaudadora` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciareca` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formsalud` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciasalud` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formseguridadpublica` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciasegpublica` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formsindicatura` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciasindicatura` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formtianguis` DROP COLUMN `tipodependencia`,
    ADD COLUMN `tipodependenciatianguis` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Formsalud` ADD CONSTRAINT `Formsalud_tipodependenciasalud_fkey` FOREIGN KEY (`tipodependenciasalud`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formdif` ADD CONSTRAINT `Formdif_tipodependenciadif_fkey` FOREIGN KEY (`tipodependenciadif`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formseguridadpublica` ADD CONSTRAINT `Formseguridadpublica_tipodependenciasegpublica_fkey` FOREIGN KEY (`tipodependenciasegpublica`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminspeccionvig` ADD CONSTRAINT `Forminspeccionvig_tipodependenciainspeccion_fkey` FOREIGN KEY (`tipodependenciainspeccion`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formtianguis` ADD CONSTRAINT `Formtianguis_tipodependenciatianguis_fkey` FOREIGN KEY (`tipodependenciatianguis`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formrecaudadora` ADD CONSTRAINT `Formrecaudadora_tipodependenciareca_fkey` FOREIGN KEY (`tipodependenciareca`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formalumbrado` ADD CONSTRAINT `Formalumbrado_tipodependenciaslumbrado_fkey` FOREIGN KEY (`tipodependenciaslumbrado`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaseopublico` ADD CONSTRAINT `Formaseopublico_tipodependenciaaseopub_fkey` FOREIGN KEY (`tipodependenciaaseopub`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaguadrenaje` ADD CONSTRAINT `Formaguadrenaje_tipodependenciaaguadrenaje_fkey` FOREIGN KEY (`tipodependenciaaguadrenaje`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formanalisisestrategico` ADD CONSTRAINT `Formanalisisestrategico_tipodependenciaanaestrategico_fkey` FOREIGN KEY (`tipodependenciaanaestrategico`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formsindicatura` ADD CONSTRAINT `Formsindicatura_tipodependenciasindicatura_fkey` FOREIGN KEY (`tipodependenciasindicatura`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formmejoramientourbano` ADD CONSTRAINT `Formmejoramientourbano_tipodependenciamejoramiento_fkey` FOREIGN KEY (`tipodependenciamejoramiento`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formconservacion` ADD CONSTRAINT `Formconservacion_tipodependenciaconservacion_fkey` FOREIGN KEY (`tipodependenciaconservacion`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminnovacion` ADD CONSTRAINT `Forminnovacion_tipodependenciainnovacion_fkey` FOREIGN KEY (`tipodependenciainnovacion`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formpcivil` ADD CONSTRAINT `Formpcivil_tipodependenciapcivil_fkey` FOREIGN KEY (`tipodependenciapcivil`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;
