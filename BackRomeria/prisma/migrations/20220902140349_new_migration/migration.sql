/*
  Warnings:

  - You are about to drop the column `formscontestadosIdForms` on the `Formaguadrenaje` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formalumbrado` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formanalisisestrategico` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formaseopublico` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formconservacion` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formconstruccion` table. All the data in the column will be lost.
  - You are about to drop the column `formsconts` on the `Formdif` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Forminnovacion` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Forminspeccionvig` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formmejoramientourbano` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formpcivil` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formrecaudadora` table. All the data in the column will be lost.
  - You are about to drop the column `formsconts` on the `Formsalud` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formseguridadpublica` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formsindicatura` table. All the data in the column will be lost.
  - You are about to drop the column `formscontestadosIdForms` on the `Formtianguis` table. All the data in the column will be lost.
  - You are about to drop the `Formscontestados` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Formaguadrenaje` DROP FOREIGN KEY `Formaguadrenaje_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formalumbrado` DROP FOREIGN KEY `Formalumbrado_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formanalisisestrategico` DROP FOREIGN KEY `Formanalisisestrategico_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formaseopublico` DROP FOREIGN KEY `Formaseopublico_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formconservacion` DROP FOREIGN KEY `Formconservacion_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formconstruccion` DROP FOREIGN KEY `Formconstruccion_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formdif` DROP FOREIGN KEY `Formdif_formsconts_fkey`;

-- DropForeignKey
ALTER TABLE `Forminnovacion` DROP FOREIGN KEY `Forminnovacion_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Forminspeccionvig` DROP FOREIGN KEY `Forminspeccionvig_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formmejoramientourbano` DROP FOREIGN KEY `Formmejoramientourbano_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formpcivil` DROP FOREIGN KEY `Formpcivil_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formrecaudadora` DROP FOREIGN KEY `Formrecaudadora_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formsalud` DROP FOREIGN KEY `Formsalud_formsconts_fkey`;

-- DropForeignKey
ALTER TABLE `Formseguridadpublica` DROP FOREIGN KEY `Formseguridadpublica_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formsindicatura` DROP FOREIGN KEY `Formsindicatura_formscontestadosIdForms_fkey`;

-- DropForeignKey
ALTER TABLE `Formtianguis` DROP FOREIGN KEY `Formtianguis_formscontestadosIdForms_fkey`;

-- AlterTable
ALTER TABLE `Formaguadrenaje` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formalumbrado` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formanalisisestrategico` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formaseopublico` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formconservacion` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formconstruccion` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formdif` DROP COLUMN `formsconts`;

-- AlterTable
ALTER TABLE `Forminnovacion` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Forminspeccionvig` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formmejoramientourbano` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formpcivil` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formrecaudadora` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formsalud` DROP COLUMN `formsconts`;

-- AlterTable
ALTER TABLE `Formseguridadpublica` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formsindicatura` DROP COLUMN `formscontestadosIdForms`;

-- AlterTable
ALTER TABLE `Formtianguis` DROP COLUMN `formscontestadosIdForms`;

-- DropTable
DROP TABLE `Formscontestados`;
