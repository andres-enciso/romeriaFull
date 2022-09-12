/*
  Warnings:

  - You are about to alter the column `horaFinEucaristica` on the `Formconstruccion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - Added the required column `cantidadConto14` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cantidadConto15` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `concepto14` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `concepto15` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaInstalacionAguaAmericas` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaInstalacionAguaHidalgo` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Formconstruccion` ADD COLUMN `cantidadConto14` VARCHAR(191) NOT NULL,
    ADD COLUMN `cantidadConto15` VARCHAR(191) NOT NULL,
    ADD COLUMN `concepto14` VARCHAR(191) NOT NULL,
    ADD COLUMN `concepto15` VARCHAR(191) NOT NULL,
    ADD COLUMN `horaInstalacionAguaAmericas` DATETIME(3) NOT NULL,
    ADD COLUMN `horaInstalacionAguaHidalgo` DATETIME(3) NOT NULL,
    MODIFY `horaFinEucaristica` DATETIME(3) NOT NULL;
