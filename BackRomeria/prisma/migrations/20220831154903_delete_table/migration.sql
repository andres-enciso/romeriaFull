/*
  Warnings:

  - You are about to drop the `Usersforms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Usersforms` DROP FOREIGN KEY `Usersforms_constId_fkey`;

-- DropForeignKey
ALTER TABLE `Usersforms` DROP FOREIGN KEY `Usersforms_innovId_fkey`;

-- DropForeignKey
ALTER TABLE `Usersforms` DROP FOREIGN KEY `Usersforms_pcivilId_fkey`;

-- DropForeignKey
ALTER TABLE `Usersforms` DROP FOREIGN KEY `Usersforms_userId_fkey`;

-- DropTable
DROP TABLE `Usersforms`;
