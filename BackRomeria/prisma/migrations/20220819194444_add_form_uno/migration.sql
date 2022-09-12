-- CreateTable
CREATE TABLE `Formconstruccion` (
    `idConstruccion` INTEGER NOT NULL AUTO_INCREMENT,
    `concepto1` VARCHAR(191) NOT NULL,
    `inicioOperac` DATETIME(3) NOT NULL,
    `cierreOperac` DATETIME(3) NOT NULL,
    `concepto2` VARCHAR(191) NOT NULL,
    `horaIniConto2` DATETIME(3) NOT NULL,
    `horaFinConto2` DATETIME(3) NOT NULL,
    `concepto3` VARCHAR(191) NOT NULL,
    `horarioCierre` DATETIME(3) NOT NULL,
    `horarioApertura` DATETIME(3) NOT NULL,
    `concepto4` VARCHAR(191) NOT NULL,
    `horaInstalacionVallas` DATETIME(3) NOT NULL,
    `cantidadVallasIns` INTEGER NOT NULL,
    `horaInstalacionSiilleria` DATETIME(3) NOT NULL,
    `horaDesinstalacionSiilleria` DATETIME(3) NOT NULL,
    `concepto6` VARCHAR(191) NOT NULL,
    `horaInstalacionAmericasObelisco` DATETIME(3) NOT NULL,
    `cantidadAguaAmericasObelisco` INTEGER NOT NULL,
    `concepto7` VARCHAR(191) NOT NULL,
    `horaArriboPCuartel` DATETIME(3) NOT NULL,
    `msjConto7` VARCHAR(191) NOT NULL,
    `concepto8` VARCHAR(191) NOT NULL,
    `horaArriboSCuartel` DATETIME(3) NOT NULL,
    `msjConto8` VARCHAR(191) NOT NULL,
    `concepto9` VARCHAR(191) NOT NULL,
    `horaArriboTCuartel` DATETIME(3) NOT NULL,
    `msjConto9` VARCHAR(191) NOT NULL,
    `concepto10` VARCHAR(191) NOT NULL,
    `horaArriboImagenAmePatria` DATETIME(3) NOT NULL,
    `msjConto10` VARCHAR(191) NOT NULL,
    `concepto11` VARCHAR(191) NOT NULL,
    `horaArriboImagenBasilica` DATETIME(3) NOT NULL,
    `msjConto11` VARCHAR(191) NOT NULL,
    `concepto12` VARCHAR(191) NOT NULL,
    `horaIniEucaristica` DATETIME(3) NOT NULL,
    `msjConto12` VARCHAR(191) NOT NULL,
    `concepto13` VARCHAR(191) NOT NULL,
    `horaFinEucaristica` VARCHAR(191) NOT NULL,
    `msjConto13` VARCHAR(191) NOT NULL,
    `tipodependenciaconstruccion` INTEGER NOT NULL,

    PRIMARY KEY (`idConstruccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Formconstruccion` ADD CONSTRAINT `Formconstruccion_tipodependenciaconstruccion_fkey` FOREIGN KEY (`tipodependenciaconstruccion`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;
