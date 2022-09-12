/*
  Warnings:

  - You are about to alter the column `cantidadConto14` on the `Formconstruccion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `cantidadConto15` on the `Formconstruccion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Formconstruccion` MODIFY `cantidadConto14` INTEGER NOT NULL,
    MODIFY `cantidadConto15` INTEGER NOT NULL;
