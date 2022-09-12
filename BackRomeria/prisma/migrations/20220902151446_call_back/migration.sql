/*
  Warnings:

  - You are about to drop the `Getallforms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Getallforms` DROP FOREIGN KEY `Getallforms_fPCivilId_fkey`;

-- DropForeignKey
ALTER TABLE `Getallforms` DROP FOREIGN KEY `Getallforms_fcontrsId_fkey`;

-- DropTable
DROP TABLE `Getallforms`;
