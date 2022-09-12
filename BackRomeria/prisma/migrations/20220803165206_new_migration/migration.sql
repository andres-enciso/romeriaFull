/*
  Warnings:

  - A unique constraint covering the columns `[idFormulario]` on the table `Formularios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Formularios_idFormulario_key` ON `Formularios`(`idFormulario`);
