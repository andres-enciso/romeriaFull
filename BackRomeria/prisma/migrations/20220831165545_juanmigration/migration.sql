/*
  Warnings:

  - Added the required column `usuariorespondioDren` to the `Formaguadrenaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioAlum` to the `Formalumbrado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioAna` to the `Formanalisisestrategico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioAseo` to the `Formaseopublico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioConserv` to the `Formconservacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioconstr` to the `Formconstruccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondiodif` to the `Formdif` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioInnov` to the `Forminnovacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioVig` to the `Forminspeccionvig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioMej` to the `Formmejoramientourbano` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioPcivil` to the `Formpcivil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioReca` to the `Formrecaudadora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondio` to the `Formsalud` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioPublica` to the `Formseguridadpublica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioSind` to the `Formsindicatura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariorespondioTia` to the `Formtianguis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Formaguadrenaje` ADD COLUMN `usuariorespondioDren` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formalumbrado` ADD COLUMN `usuariorespondioAlum` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formanalisisestrategico` ADD COLUMN `usuariorespondioAna` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formaseopublico` ADD COLUMN `usuariorespondioAseo` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formconservacion` ADD COLUMN `usuariorespondioConserv` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formconstruccion` ADD COLUMN `usuariorespondioconstr` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formdif` ADD COLUMN `usuariorespondiodif` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Forminnovacion` ADD COLUMN `usuariorespondioInnov` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Forminspeccionvig` ADD COLUMN `usuariorespondioVig` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formmejoramientourbano` ADD COLUMN `usuariorespondioMej` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formpcivil` ADD COLUMN `usuariorespondioPcivil` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formrecaudadora` ADD COLUMN `usuariorespondioReca` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formsalud` ADD COLUMN `usuariorespondio` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formseguridadpublica` ADD COLUMN `usuariorespondioPublica` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formsindicatura` ADD COLUMN `usuariorespondioSind` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Formtianguis` ADD COLUMN `usuariorespondioTia` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Formsalud` ADD CONSTRAINT `Formsalud_usuariorespondio_fkey` FOREIGN KEY (`usuariorespondio`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formdif` ADD CONSTRAINT `Formdif_usuariorespondiodif_fkey` FOREIGN KEY (`usuariorespondiodif`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formseguridadpublica` ADD CONSTRAINT `Formseguridadpublica_usuariorespondioPublica_fkey` FOREIGN KEY (`usuariorespondioPublica`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminspeccionvig` ADD CONSTRAINT `Forminspeccionvig_usuariorespondioVig_fkey` FOREIGN KEY (`usuariorespondioVig`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formtianguis` ADD CONSTRAINT `Formtianguis_usuariorespondioTia_fkey` FOREIGN KEY (`usuariorespondioTia`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formrecaudadora` ADD CONSTRAINT `Formrecaudadora_usuariorespondioReca_fkey` FOREIGN KEY (`usuariorespondioReca`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formalumbrado` ADD CONSTRAINT `Formalumbrado_usuariorespondioAlum_fkey` FOREIGN KEY (`usuariorespondioAlum`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaseopublico` ADD CONSTRAINT `Formaseopublico_usuariorespondioAseo_fkey` FOREIGN KEY (`usuariorespondioAseo`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaguadrenaje` ADD CONSTRAINT `Formaguadrenaje_usuariorespondioDren_fkey` FOREIGN KEY (`usuariorespondioDren`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formanalisisestrategico` ADD CONSTRAINT `Formanalisisestrategico_usuariorespondioAna_fkey` FOREIGN KEY (`usuariorespondioAna`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formsindicatura` ADD CONSTRAINT `Formsindicatura_usuariorespondioSind_fkey` FOREIGN KEY (`usuariorespondioSind`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formmejoramientourbano` ADD CONSTRAINT `Formmejoramientourbano_usuariorespondioMej_fkey` FOREIGN KEY (`usuariorespondioMej`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formconservacion` ADD CONSTRAINT `Formconservacion_usuariorespondioConserv_fkey` FOREIGN KEY (`usuariorespondioConserv`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminnovacion` ADD CONSTRAINT `Forminnovacion_usuariorespondioInnov_fkey` FOREIGN KEY (`usuariorespondioInnov`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formpcivil` ADD CONSTRAINT `Formpcivil_usuariorespondioPcivil_fkey` FOREIGN KEY (`usuariorespondioPcivil`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formconstruccion` ADD CONSTRAINT `Formconstruccion_usuariorespondioconstr_fkey` FOREIGN KEY (`usuariorespondioconstr`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;
