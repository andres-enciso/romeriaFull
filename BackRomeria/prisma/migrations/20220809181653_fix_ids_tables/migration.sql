/*
  Warnings:

  - The primary key for the `Formrecaudadora` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idInspeccionVig` on the `Formrecaudadora` table. All the data in the column will be lost.
  - The primary key for the `Formtianguis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idInspeccionVig` on the `Formtianguis` table. All the data in the column will be lost.
  - Added the required column `idRecaudadora` to the `Formrecaudadora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTianguis` to the `Formtianguis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Formrecaudadora` DROP PRIMARY KEY,
    DROP COLUMN `idInspeccionVig`,
    ADD COLUMN `idRecaudadora` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idRecaudadora`);

-- AlterTable
ALTER TABLE `Formtianguis` DROP PRIMARY KEY,
    DROP COLUMN `idInspeccionVig`,
    ADD COLUMN `idTianguis` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idTianguis`);
