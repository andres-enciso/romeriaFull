/*
  Warnings:

  - You are about to drop the column `tipoRol` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `rolUsuario` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Usuarios` DROP FOREIGN KEY `Usuarios_tipoRol_fkey`;

-- AlterTable
ALTER TABLE `Usuarios` DROP COLUMN `tipoRol`,
    ADD COLUMN `rolUsuario` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_rolUsuario_fkey` FOREIGN KEY (`rolUsuario`) REFERENCES `Roles`(`idRol`) ON DELETE RESTRICT ON UPDATE CASCADE;
