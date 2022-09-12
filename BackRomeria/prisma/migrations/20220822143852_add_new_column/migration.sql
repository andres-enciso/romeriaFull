/*
  Warnings:

  - Added the required column `concepto5` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Formconstruccion` ADD COLUMN `concepto5` VARCHAR(191) NOT NULL;
