/*
  Warnings:

  - You are about to drop the column `idFormulario` on the `Dependencias` table. All the data in the column will be lost.
  - You are about to drop the `Formularios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Dependencias` DROP FOREIGN KEY `Dependencias_idFormulario_fkey`;

-- AlterTable
ALTER TABLE `Dependencias` DROP COLUMN `idFormulario`;

-- DropTable
DROP TABLE `Formularios`;
