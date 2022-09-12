-- CreateTable
CREATE TABLE `Form2Salud` (
    `idPreguntasSalud` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadDeshidratacion` INTEGER NOT NULL,
    `msjDeshidratacion` VARCHAR(191) NOT NULL,
    `cantidadHipertension` INTEGER NOT NULL,
    `msjHipertension` VARCHAR(191) NOT NULL,
    `cantidadInfartoMiocardio` INTEGER NOT NULL,
    `msjInfartoMiocardio` VARCHAR(191) NOT NULL,
    `cantidadConvulsivos` INTEGER NOT NULL,
    `msjConvulsivos` VARCHAR(191) NOT NULL,
    `cantidadEnfRespiratoria` INTEGER NOT NULL,
    `msjEnfRespiratoria` VARCHAR(191) NOT NULL,
    `cantidadEnfGatrointestinal` INTEGER NOT NULL,
    `msjEnfGatrointestinal` VARCHAR(191) NOT NULL,
    `cantidadFebrilesExa` INTEGER NOT NULL,
    `msjFebrilesExa` VARCHAR(191) NOT NULL,
    `cantidadCefaleas` INTEGER NOT NULL,
    `msjCefaleas` VARCHAR(191) NOT NULL,
    `cantidadDiabetico` INTEGER NOT NULL,
    `msjDiabetico` VARCHAR(191) NOT NULL,
    `cantidadIntoxicacion` INTEGER NOT NULL,
    `msjIntoxicacion` VARCHAR(191) NOT NULL,
    `cantidadCaidas` INTEGER NOT NULL,
    `msjCaidas` VARCHAR(191) NOT NULL,
    `cantidadQuemaduras` INTEGER NOT NULL,
    `msjQuemaduras` VARCHAR(191) NOT NULL,
    `cantidadAtropellado` INTEGER NOT NULL,
    `msjAtropellado` VARCHAR(191) NOT NULL,
    `cantidadChoque` INTEGER NOT NULL,
    `msjChoque` VARCHAR(191) NOT NULL,
    `cantidadVolcadura` INTEGER NOT NULL,
    `msjVolcadura` VARCHAR(191) NOT NULL,
    `cantidadMuscoloesqueletico` INTEGER NOT NULL,
    `msjMuscoloesqueletico` VARCHAR(191) NOT NULL,
    `cantidadArmablanca` INTEGER NOT NULL,
    `msjArmablanca` VARCHAR(191) NOT NULL,
    `cantidadArmadefuego` INTEGER NOT NULL,
    `msjArmadefuego` VARCHAR(191) NOT NULL,
    `cantidadOtros` INTEGER NOT NULL,
    `msjOtros` VARCHAR(191) NOT NULL,
    `cantidaPediatrico` INTEGER NOT NULL,
    `msjPediatrico` VARCHAR(191) NOT NULL,
    `cantidadAdultos` INTEGER NOT NULL,
    `msjAdultos` VARCHAR(191) NOT NULL,
    `cantidadAdultoMayor` INTEGER NOT NULL,
    `msjAdultoMayor` VARCHAR(191) NOT NULL,
    `cantidadFemenino` INTEGER NOT NULL,
    `msjFemenino` VARCHAR(191) NOT NULL,
    `cantidadMasculino` INTEGER NOT NULL,
    `msjMasculino` VARCHAR(191) NOT NULL,
    `cantidadIntermedio` INTEGER NOT NULL,
    `msjIntermedio` VARCHAR(191) NOT NULL,
    `cantidadTransladados` INTEGER NOT NULL,
    `msjTransladados` VARCHAR(191) NOT NULL,
    `oKPunto1` VARCHAR(191) NOT NULL,
    `msjPunto1` VARCHAR(191) NOT NULL,
    `oKPunto2` VARCHAR(191) NOT NULL,
    `msjPunto2` VARCHAR(191) NOT NULL,
    `oKPunto3` VARCHAR(191) NOT NULL,
    `msjPunto3` VARCHAR(191) NOT NULL,
    `oKPunto4` VARCHAR(191) NOT NULL,
    `msjPunto4` VARCHAR(191) NOT NULL,
    `oKPunto5` VARCHAR(191) NOT NULL,
    `msjPunto5` VARCHAR(191) NOT NULL,
    `oKPunto6` VARCHAR(191) NOT NULL,
    `msjPunto6` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Form2Salud_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPreguntasSalud`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form3Dif` (
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

    UNIQUE INDEX `Form3Dif_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPreguntasDif`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form4SeguridadPublica` (
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

    UNIQUE INDEX `Form4SeguridadPublica_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idPreguntasSPublica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form5InspeccionVig` (
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

    UNIQUE INDEX `Form5InspeccionVig_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInspeccionVig`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form6Tianuis` (
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

    UNIQUE INDEX `Form6Tianuis_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInspeccionVig`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form7Recaudadora` (
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

    UNIQUE INDEX `Form7Recaudadora_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idInspeccionVig`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form8Alumbrado` (
    `idAlumbrado` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidadRevisionRealizadaComerciantes` INTEGER NOT NULL,
    `msjRevisionRealizadaComerciantes` VARCHAR(191) NOT NULL,
    `cantidadModConectados` INTEGER NOT NULL,
    `msjModConectados` VARCHAR(191) NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Form8Alumbrado_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idAlumbrado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form9AseoPublico` (
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

    UNIQUE INDEX `Form9AseoPublico_tipodependencia_key`(`tipodependencia`),
    PRIMARY KEY (`idAPublico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Form2Salud` ADD CONSTRAINT `Form2Salud_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form3Dif` ADD CONSTRAINT `Form3Dif_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form4SeguridadPublica` ADD CONSTRAINT `Form4SeguridadPublica_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form5InspeccionVig` ADD CONSTRAINT `Form5InspeccionVig_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form6Tianuis` ADD CONSTRAINT `Form6Tianuis_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form7Recaudadora` ADD CONSTRAINT `Form7Recaudadora_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form8Alumbrado` ADD CONSTRAINT `Form8Alumbrado_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form9AseoPublico` ADD CONSTRAINT `Form9AseoPublico_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;
