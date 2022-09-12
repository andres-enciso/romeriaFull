-- CreateTable
CREATE TABLE `Formularios` (
    `idFormulario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreFormulario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idFormulario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dependencias` (
    `idDependencia` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreDependencia` VARCHAR(191) NOT NULL,
    `idFormulario` INTEGER NOT NULL,

    UNIQUE INDEX `Dependencias_idFormulario_key`(`idFormulario`),
    PRIMARY KEY (`idDependencia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `idRol` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoRol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idRol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `idUsuarios` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `contrasena` VARCHAR(191) NOT NULL,
    `noEmpleado` INTEGER NOT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tipoRol` INTEGER NOT NULL,
    `tipodependencia` INTEGER NOT NULL,

    UNIQUE INDEX `Usuarios_correo_key`(`correo`),
    PRIMARY KEY (`idUsuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dependencias` ADD CONSTRAINT `Dependencias_idFormulario_fkey` FOREIGN KEY (`idFormulario`) REFERENCES `Formularios`(`idFormulario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_tipoRol_fkey` FOREIGN KEY (`tipoRol`) REFERENCES `Roles`(`idRol`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_tipodependencia_fkey` FOREIGN KEY (`tipodependencia`) REFERENCES `Dependencias`(`idDependencia`) ON DELETE RESTRICT ON UPDATE CASCADE;
