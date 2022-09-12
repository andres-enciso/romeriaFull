/*
  Warnings:

  - You are about to drop the `Form10AguaDrenaje` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form11AnalisisEstrategico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form12Sindicatura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form13MejoramientoUrbano` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form14Conservacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form16Innovacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form17PCivil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form3Dif` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form4SeguridadPublica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form5InspeccionVig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form6Tianuis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form7Recaudadora` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form8Alumbrado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form9AseoPublico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Form10AguaDrenaje` DROP FOREIGN KEY `Form10AguaDrenaje_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form11AnalisisEstrategico` DROP FOREIGN KEY `Form11AnalisisEstrategico_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form12Sindicatura` DROP FOREIGN KEY `Form12Sindicatura_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form13MejoramientoUrbano` DROP FOREIGN KEY `Form13MejoramientoUrbano_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form14Conservacion` DROP FOREIGN KEY `Form14Conservacion_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form16Innovacion` DROP FOREIGN KEY `Form16Innovacion_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form17PCivil` DROP FOREIGN KEY `Form17PCivil_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form3Dif` DROP FOREIGN KEY `Form3Dif_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form4SeguridadPublica` DROP FOREIGN KEY `Form4SeguridadPublica_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form5InspeccionVig` DROP FOREIGN KEY `Form5InspeccionVig_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form6Tianuis` DROP FOREIGN KEY `Form6Tianuis_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form7Recaudadora` DROP FOREIGN KEY `Form7Recaudadora_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form8Alumbrado` DROP FOREIGN KEY `Form8Alumbrado_tipodependencia_fkey`;

-- DropForeignKey
ALTER TABLE `Form9AseoPublico` DROP FOREIGN KEY `Form9AseoPublico_tipodependencia_fkey`;

-- DropTable
DROP TABLE `Form10AguaDrenaje`;

-- DropTable
DROP TABLE `Form11AnalisisEstrategico`;

-- DropTable
DROP TABLE `Form12Sindicatura`;

-- DropTable
DROP TABLE `Form13MejoramientoUrbano`;

-- DropTable
DROP TABLE `Form14Conservacion`;

-- DropTable
DROP TABLE `Form16Innovacion`;

-- DropTable
DROP TABLE `Form17PCivil`;

-- DropTable
DROP TABLE `Form3Dif`;

-- DropTable
DROP TABLE `Form4SeguridadPublica`;

-- DropTable
DROP TABLE `Form5InspeccionVig`;

-- DropTable
DROP TABLE `Form6Tianuis`;

-- DropTable
DROP TABLE `Form7Recaudadora`;

-- DropTable
DROP TABLE `Form8Alumbrado`;

-- DropTable
DROP TABLE `Form9AseoPublico`;

-- CreateTable
CREATE TABLE `Formdif` (
    `idPreguntasDif` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadMenores18` INTEGER NOT NULL,
    `msjMenores18` VARCHAR(191) NOT NULL,
    `cantidadAdultos18a59` INTEGER NOT NULL,
    `msjAdultos18a59` VARCHAR(191) NOT NULL,
    `cantidadAdultosMay60` INTEGER NOT NULL,
    `msjAdultosMay60` VARCHAR(191) NOT NULL,
    `cantidadAdDiscapacitados` INTEGER NOT NULL,
    `msjAdDiscapacitados` VARCHAR(191) NOT NULL,
    `conceptoInstModPresiMun` VARCHAR(191) NOT NULL,
    `msjInstModPresiMun` VARCHAR(191) NOT NULL,
    `conceptoInstModAvilaLaureles` VARCHAR(191) NOT NULL,
    `msjInstModAvilaLaureles` VARCHAR(191) NOT NULL,
    `conceptoInstModPerExtravAmericaEsparta` VARCHAR(191) NOT NULL,
    `msjInstModPerExtravAmericaEsparta` VARCHAR(191) NOT NULL,
    `conceptoInstModPerExtravAmericaObelisco` VARCHAR(191) NOT NULL,
    `msjInstModPerExtravAmericaObelisco` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formdif_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPreguntasDif`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formseguridadpublica` (
    `idPreguntasSPublica` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadAdultosEnervantes` INTEGER NOT NULL,
    `cantidadMenoresEnervantes` INTEGER NOT NULL,
    `msjEnervantes` VARCHAR(191) NOT NULL,
    `cantidadAdultosArmaFuego` INTEGER NOT NULL,
    `cantidadMenoresArmaFuego` INTEGER NOT NULL,
    `msjArmaFuego` VARCHAR(191) NOT NULL,
    `cantidadAdultosBebidasEmbriagantes` INTEGER NOT NULL,
    `cantidadMenoresBebidasEmbriagantes` INTEGER NOT NULL,
    `msjBebidasEmbriagantes` VARCHAR(191) NOT NULL,
    `cantidadMenoresAlterarOrden` INTEGER NOT NULL,
    `cantidadAdultosAlterarOrden` INTEGER NOT NULL,
    `msjAlterarOrden` VARCHAR(191) NOT NULL,
    `cantidadMenoresFaltaAdmin` INTEGER NOT NULL,
    `cantidadAdultosFaltaAdmin` INTEGER NOT NULL,
    `msjFaltaAdmin` VARCHAR(191) NOT NULL,
    `cantidadAdultosOtroServicio` INTEGER NOT NULL,
    `cantidadMenoresOtroServicio` INTEGER NOT NULL,
    `msjOtroServicio` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formseguridadpublica_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPreguntasSPublica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Forminspeccionvig` (
    `idInspeccionVig` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadActasConDecomisoZona` INTEGER NOT NULL,
    `cantidadActasConDecomisoRutaEvac` INTEGER NOT NULL,
    `msjActasDecomiso` VARCHAR(191) NOT NULL,
    `cantidadActasComercioEstab` INTEGER NOT NULL,
    `msjActasComercioEstab` VARCHAR(191) NOT NULL,
    `cantidadClausurasComEstablecido` INTEGER NOT NULL,
    `msjClausurasComEstablecido` VARCHAR(191) NOT NULL,
    `cantidadClausuraLeySeca` INTEGER NOT NULL,
    `msjClausuraLeySeca` VARCHAR(191) NOT NULL,
    `cantidadClausurasJMecanicos` INTEGER NOT NULL,
    `msjClausurasJMecanicos` VARCHAR(191) NOT NULL,
    `cantidadClausuraInfraccDiversas` INTEGER NOT NULL,
    `msjClausuraInfraccDiversas` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Forminspeccionvig_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInspeccionVig`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formtianguis` (
    `idInspeccionVig` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadComerciantesInst` INTEGER NOT NULL,
    `msjComerciantesInst` VARCHAR(191) NOT NULL,
    `cantidadComercio` INTEGER NOT NULL,
    `msjComercio` VARCHAR(191) NOT NULL,
    `cantidadJuegos` INTEGER NOT NULL,
    `msjJuegos` VARCHAR(191) NOT NULL,
    `callesZona1` VARCHAR(191) NOT NULL,
    `callesZona2` VARCHAR(191) NOT NULL,
    `callesZona3` VARCHAR(191) NOT NULL,
    `callesZona4` VARCHAR(191) NOT NULL,
    `zonaAmortiguamiento` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formtianguis_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInspeccionVig`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formrecaudadora` (
    `idInspeccionVig` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadRecaudado` INTEGER NOT NULL,
    `msjMontoRecaudado` VARCHAR(191) NOT NULL,
    `CobroZona1` VARCHAR(191) NOT NULL,
    `msjCobroZona1` VARCHAR(191) NOT NULL,
    `CobroZona2` VARCHAR(191) NOT NULL,
    `msjCobroZona2` VARCHAR(191) NOT NULL,
    `CobroZona3` VARCHAR(191) NOT NULL,
    `msjCobroZona3` VARCHAR(191) NOT NULL,
    `CobroZona4JMecanicos` VARCHAR(191) NOT NULL,
    `msjCobroZona4JMecanicos` VARCHAR(191) NOT NULL,
    `CobroZonaAmortiguamiento` VARCHAR(191) NOT NULL,
    `msjZonaAmortiguamiento` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formrecaudadora_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInspeccionVig`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formalumbrado` (
    `idAlumbrado` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadRevisionRealizadaComerciantes` INTEGER NOT NULL,
    `msjRevisionRealizadaComerciantes` VARCHAR(191) NOT NULL,
    `cantidadModConectados` INTEGER NOT NULL,
    `msjModConectados` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formalumbrado_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idAlumbrado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formaseopublico` (
    `idAPublico` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadToneladasRecibidasPicachos` INTEGER NOT NULL,
    `msjToneladasRecibidasPicachos` VARCHAR(191) NOT NULL,
    `cantidadToneladasOperativoBarridoManual` INTEGER NOT NULL,
    `msjToneladasOperativoBarridoManual` VARCHAR(191) NOT NULL,
    `ContenedorAmericaEsparta` VARCHAR(191) NOT NULL,
    `msjContenedorAmericaEsparta` VARCHAR(191) NOT NULL,
    `ContenedorAurelioJuanpabloii` VARCHAR(191) NOT NULL,
    `msjContenedorAurelioJuanpabloii` VARCHAR(191) NOT NULL,
    `SarcofagoLaureles` VARCHAR(191) NOT NULL,
    `msjSarcofagoLaureles` VARCHAR(191) NOT NULL,
    `HidalgoECarranza` VARCHAR(191) NOT NULL,
    `msjHidalgoECarranza` VARCHAR(191) NOT NULL,
    `VillaFantasia` VARCHAR(191) NOT NULL,
    `msjVillaFantasia` VARCHAR(191) NOT NULL,
    `LaurelesIndustria` VARCHAR(191) NOT NULL,
    `msjLaurelesIndustria` VARCHAR(191) NOT NULL,
    `PlazaPatria` VARCHAR(191) NOT NULL,
    `msjPlazaPatria` VARCHAR(191) NOT NULL,
    `PetAmericasRomanos` VARCHAR(191) NOT NULL,
    `msjPetAmericasRomanos` VARCHAR(191) NOT NULL,
    `PetPetAmericasMixton` VARCHAR(191) NOT NULL,
    `msjPetAmericasMixton` VARCHAR(191) NOT NULL,
    `PetLaurelesHidalgo` VARCHAR(191) NOT NULL,
    `msjPetLaurelesHidalgo` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formaseopublico_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idAPublico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formaguadrenaje` (
    `idADrenaje` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadBanosInstalados` INTEGER NOT NULL,
    `msjBanosInstalados` VARCHAR(191) NOT NULL,
    `cantidadUsuarios` INTEGER NOT NULL,
    `msjUsuarios` VARCHAR(191) NOT NULL,
    `P1JMinaMatamoros` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP1JMinaMatamoros` INTEGER NOT NULL,
    `P2EvaSofia` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP2EvaSofia` INTEGER NOT NULL,
    `P3CincoMayoSofia` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP3CincoMayoSofia` INTEGER NOT NULL,
    `P4MixtonAmericas` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP4MixtonAmericas` INTEGER NOT NULL,
    `P5AmericasEsparta` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP5AmericasEsparta` INTEGER NOT NULL,
    `P6AmericasPatria` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP6AmericasPatria` INTEGER NOT NULL,
    `P7AvilaSantaElena` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP7AvilaSantaElena` INTEGER NOT NULL,
    `P8AvilaPatria` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP8AvilaPatria` INTEGER NOT NULL,
    `P9HidalgoLauralesJPabloii` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP9HidalgoLauralesJPabloii` INTEGER NOT NULL,
    `P10EmilioLaureles` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP10EmilioLaureles` INTEGER NOT NULL,
    `P11SarcofagoLaurelesJPabloii` VARCHAR(191) NOT NULL,
    `cantidadEstimadaP11SarcofagoLaurelesJPabloii` INTEGER NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formaguadrenaje_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idADrenaje`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formanalisisestrategico` (
    `idAEstrategico` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadMediosComuAendidos` INTEGER NOT NULL,
    `msjMediosComuAendidos` VARCHAR(191) NOT NULL,
    `cantidadMediosCobertura` INTEGER NOT NULL,
    `msjMediosCobertura` VARCHAR(191) NOT NULL,
    `cantidadAtencionLogistica` INTEGER NOT NULL,
    `msjAtencionLogistica` VARCHAR(191) NOT NULL,
    `SalaPrensaS` VARCHAR(191) NOT NULL,
    `msjSalaPrensa` VARCHAR(191) NOT NULL,
    `CierreSalaPrensa` VARCHAR(191) NOT NULL,
    `msjCierreSalaPrensa` VARCHAR(191) NOT NULL,
    `InstalacionMediosPAmericas` VARCHAR(191) NOT NULL,
    `msjInstalacionMediosPAmericas` VARCHAR(191) NOT NULL,
    `InstalacionMediosUBasilica` VARCHAR(191) NOT NULL,
    `msjInstalacionMediosUBasilica` VARCHAR(191) NOT NULL,
    `InstalacionMediosEvaBriseno` VARCHAR(191) NOT NULL,
    `msjInstalacionMediosEvaBriseno` VARCHAR(191) NOT NULL,
    `CorteInfo11Oct` VARCHAR(191) NOT NULL,
    `msjCorteInfo11Oct` VARCHAR(191) NOT NULL,
    `CorteInfo12Oct` VARCHAR(191) NOT NULL,
    `msjCorteInfo12Oct` VARCHAR(191) NOT NULL,
    `RuedaPMat12oct` VARCHAR(191) NOT NULL,
    `msjRuedaPMat12oct` VARCHAR(191) NOT NULL,
    `RuedaPFin12oct` VARCHAR(191) NOT NULL,
    `msjRuedaPFin12oct` VARCHAR(191) NOT NULL,
    `InstaComedorReporteros` VARCHAR(191) NOT NULL,
    `msjInstaComedorReporteros` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formanalisisestrategico_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idAEstrategico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formsindicatura` (
    `idSindicatura` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadActasCalificadas` INTEGER NOT NULL,
    `msjActasCalificadas` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formsindicatura_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idSindicatura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formmejoramientourbano` (
    `idMUrbano` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadToneladasBasuraReco` INTEGER NOT NULL,
    `msjToneladasBasuraReco` VARCHAR(191) NOT NULL,
    `cantidadOperativoMejBarridoManualMecanico` INTEGER NOT NULL,
    `msjOperativoMejBarridoManualMecanico` VARCHAR(191) NOT NULL,
    `LimpiezaAmericasDia12` VARCHAR(191) NOT NULL,
    `msjLimpiezaAmericasDia12` VARCHAR(191) NOT NULL,
    `LimpiezaAvilaCamDia12` VARCHAR(191) NOT NULL,
    `msjLimpiezaAvilaCamDia12` VARCHAR(191) NOT NULL,
    `LimpiezaLaurelesDia12` VARCHAR(191) NOT NULL,
    `msjLimpiezaLaurelesDia12` VARCHAR(191) NOT NULL,
    `LimpiezaPatriaDia12` VARCHAR(191) NOT NULL,
    `msjLimpiezaPatriaDia12` VARCHAR(191) NOT NULL,
    `LimpiezaAurelioOrtegaDia12` VARCHAR(191) NOT NULL,
    `msjLimpiezaAurelioOrtegaDia12` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formmejoramientourbano_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idMUrbano`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formconservacion` (
    `idConservacion` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadAtencionUnidadBasilica` INTEGER NOT NULL,
    `msjAtencionUnidadBasilica` VARCHAR(191) NOT NULL,
    `cantidadAtencionPresidenciaMun` INTEGER NOT NULL,
    `msjAtencionPresidenciaMun` VARCHAR(191) NOT NULL,
    `cantidadAtencionCOZ` INTEGER NOT NULL,
    `msjAtencionCOZ` VARCHAR(191) NOT NULL,
    `ApoyoDanzantes` VARCHAR(191) NOT NULL,
    `msjApoyoDanzantes` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formconservacion_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idConservacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Forminnovacion` (
    `idInnovacion` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadServiciosRealizados` INTEGER NOT NULL,
    `msjServiciosRealizados` VARCHAR(191) NOT NULL,
    `cantidadAtencionRepoCentroMando` INTEGER NOT NULL,
    `msjAtencionRepoCentroMando` VARCHAR(191) NOT NULL,
    `cantidadAtencionRepoSalaPrensa` INTEGER NOT NULL,
    `msjAtencionRepoSalaPrensa` VARCHAR(191) NOT NULL,
    `cantidadAtencionCentOperaciones` INTEGER NOT NULL,
    `msjAtencionCentOperaciones` VARCHAR(191) NOT NULL,
    `HabCentroMandoGnrl` VARCHAR(191) NOT NULL,
    `msjHabCentroMandoGnrl` VARCHAR(191) NOT NULL,
    `HabSalaPrensa` VARCHAR(191) NOT NULL,
    `msjHabSalaPrensa` VARCHAR(191) NOT NULL,
    `HabCentroOpZpn` VARCHAR(191) NOT NULL,
    `msjHabCentroOpZpn` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Forminnovacion_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInnovacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formpcivil` (
    `idPCivil` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadComSiCumplioNormas` INTEGER NOT NULL,
    `msjComSiCumplioNormas` VARCHAR(191) NOT NULL,
    `cantidadComNoCumplioNormas` INTEGER NOT NULL,
    `msjComNoCumplioNormas` VARCHAR(191) NOT NULL,
    `cantidadDeteccionClausuraGasLp` INTEGER NOT NULL,
    `msjDeteccionClausuraGasLp` VARCHAR(191) NOT NULL,
    `cantidadComerInspecc` INTEGER NOT NULL,
    `msjComerInspecc` VARCHAR(191) NOT NULL,
    `cantidadPersonasAtendModu` INTEGER NOT NULL,
    `msjPersonasAtendModu` VARCHAR(191) NOT NULL,
    `cantidadServIntinRealizados` INTEGER NOT NULL,
    `msjServIntinRealizados` VARCHAR(191) NOT NULL,
    `Mod1PlzCaudillos` VARCHAR(191) NOT NULL,
    `msjMod1PlzCaudillos` VARCHAR(191) NOT NULL,
    `Mod2AndadorNovAmericas` VARCHAR(191) NOT NULL,
    `msjMod2AndadorNovAmericas` VARCHAR(191) NOT NULL,
    `Mod3AmericasMixton` VARCHAR(191) NOT NULL,
    `msjMod3AmericasMixton` VARCHAR(191) NOT NULL,
    `Mod4AmericasRomanos` VARCHAR(191) NOT NULL,
    `msjMod4AmericasRomanos` VARCHAR(191) NOT NULL,
    `Mod5AmericasPatria` VARCHAR(191) NOT NULL,
    `msjMod5AmericasPatria` VARCHAR(191) NOT NULL,
    `Mod66AvilaObelisco` VARCHAR(191) NOT NULL,
    `msjMod66AvilaObelisco` VARCHAR(191) NOT NULL,
    `Mod7AvilaJacarandas` VARCHAR(191) NOT NULL,
    `msjMod7AvilaJacarandas` VARCHAR(191) NOT NULL,
    `MotobombaHidalgoZapata` VARCHAR(191) NOT NULL,
    `msjMotobombaHidalgoZapata` VARCHAR(191) NOT NULL,
    `PipaAguaCamachoPatria` VARCHAR(191) NOT NULL,
    `msjPipaAguaCamachoPatria` VARCHAR(191) NOT NULL,
    `PipaAguaLaurelesJManuel` VARCHAR(191) NOT NULL,
    `msjPipaAguaLaurelesJManuel` VARCHAR(191) NOT NULL,
    `InstModGrpUSAR` VARCHAR(191) NOT NULL,
    `msjInstModGrpUSAR` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Formpcivil_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPCivil`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Formdif` ADD CONSTRAINT `Formdif_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formseguridadpublica` ADD CONSTRAINT `Formseguridadpublica_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminspeccionvig` ADD CONSTRAINT `Forminspeccionvig_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formtianguis` ADD CONSTRAINT `Formtianguis_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formrecaudadora` ADD CONSTRAINT `Formrecaudadora_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formalumbrado` ADD CONSTRAINT `Formalumbrado_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaseopublico` ADD CONSTRAINT `Formaseopublico_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formaguadrenaje` ADD CONSTRAINT `Formaguadrenaje_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formanalisisestrategico` ADD CONSTRAINT `Formanalisisestrategico_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formsindicatura` ADD CONSTRAINT `Formsindicatura_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formmejoramientourbano` ADD CONSTRAINT `Formmejoramientourbano_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formconservacion` ADD CONSTRAINT `Formconservacion_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forminnovacion` ADD CONSTRAINT `Forminnovacion_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formpcivil` ADD CONSTRAINT `Formpcivil_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;
