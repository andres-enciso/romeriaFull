-- CreateTable
CREATE TABLE `Form10AguaDrenaje` (
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

    UNIQUE INDEX `Form10AguaDrenaje_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idADrenaje`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form11AnalisisEstrategico` (
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

    UNIQUE INDEX `Form11AnalisisEstrategico_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idAEstrategico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form12Sindicatura` (
    `idSindicatura` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadActasCalificadas` INTEGER NOT NULL,
    `msjActasCalificadas` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Form12Sindicatura_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idSindicatura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form13MejoramientoUrbano` (
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

    UNIQUE INDEX `Form13MejoramientoUrbano_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idMUrbano`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form14Conservacion` (
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

    UNIQUE INDEX `Form14Conservacion_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idConservacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form16Innovacion` (
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

    UNIQUE INDEX `Form16Innovacion_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInnovacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form17PCivil` (
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

    UNIQUE INDEX `Form17PCivil_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPCivil`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Form10AguaDrenaje` ADD CONSTRAINT `Form10AguaDrenaje_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form11AnalisisEstrategico` ADD CONSTRAINT `Form11AnalisisEstrategico_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form12Sindicatura` ADD CONSTRAINT `Form12Sindicatura_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form13MejoramientoUrbano` ADD CONSTRAINT `Form13MejoramientoUrbano_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form14Conservacion` ADD CONSTRAINT `Form14Conservacion_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form16Innovacion` ADD CONSTRAINT `Form16Innovacion_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form17PCivil` ADD CONSTRAINT `Form17PCivil_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;
