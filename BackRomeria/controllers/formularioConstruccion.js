import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getConstruccion = async (req, res) => {
  try {
    const formconstruccion = await prisma.formconstruccion.findMany({
      include: {
        usuariosrespondconstr: true,
      },
    });
    res.send(formconstruccion);
  } catch (error) {
    res.status(403)
  }
};

export const getFormConstruccionById = async (req, res) => {
  try {
    const { id } = req.params;
    const formconstruccion = await prisma.formconstruccion.findUnique({
      where: {
        idConstruccion: Number(id),
      },
      include: {
        usuariosrespondconstr: true,
      },
    });
    res.json(formconstruccion);
  } catch (error) {
    res.status(403)
  }
};

export const createFormConstruccion = async (req, res) => {
  try {
    const {
        concepto1,
        inicioOperac,
        cierreOperac,
        concepto2,
        horaIniConto2,
        horaFinConto2,
        concepto3,
        horarioCierre,
        horarioApertura,
        concepto4,
        horaInstalacionVallas,
        cantidadVallasIns,
        concepto5,
        horaInstalacionSiilleria,
        horaDesinstalacionSiilleria,
        concepto6,
        horaInstalacionAmericasObelisco,
        cantidadAguaAmericasObelisco,
        concepto7,
        horaArriboPCuartel,
        msjConto7,
        concepto8,
        horaArriboSCuartel,
        msjConto8,
        concepto9,
        horaArriboTCuartel,
        msjConto9,
        concepto10,
        horaArriboImagenAmePatria,
        msjConto10,
        concepto11,
        horaArriboImagenBasilica,
        msjConto11,
        concepto12,
        horaIniEucaristica,
        msjConto12,
        concepto13,
        horaFinEucaristica,
        msjConto13,
        concepto14,
        horaInstalacionAguaAmericas,
        cantidadConto14,
        concepto15,
        horaInstalacionAguaHidalgo,
        cantidadConto15,
        tipodependenciaconstruccion,
        usuariorespondioconstr
    } = req.body;

    const formconstruccion = await prisma.formconstruccion.create({
      data: {
        concepto1,
        inicioOperac,
        cierreOperac,
        concepto2,
        horaIniConto2,
        horaFinConto2,
        concepto3,
        horarioCierre,
        horarioApertura,
        concepto4,
        horaInstalacionVallas,
        cantidadVallasIns,
        concepto5,
        horaInstalacionSiilleria,
        horaDesinstalacionSiilleria,
        concepto6,
        horaInstalacionAmericasObelisco,
        cantidadAguaAmericasObelisco,
        concepto7,
        horaArriboPCuartel,
        msjConto7,
        concepto8,
        horaArriboSCuartel,
        msjConto8,
        concepto9,
        horaArriboTCuartel,
        msjConto9,
        concepto10,
        horaArriboImagenAmePatria,
        msjConto10,
        concepto11,
        horaArriboImagenBasilica,
        msjConto11,
        concepto12,
        horaIniEucaristica,
        msjConto12,
        concepto13,
        horaFinEucaristica,
        msjConto13,
        concepto14,
        horaInstalacionAguaAmericas,
        cantidadConto14,
        concepto15,
        horaInstalacionAguaHidalgo,
        cantidadConto15,
        dependenciaConstru: {
          connect: { idDependencia: Number(tipodependenciaconstruccion) },
        },
        usuariosrespondconstr: {
          connect: { idUsuarios: Number(usuariorespondioconstr) },
        },
      },
    });

    res.send(formconstruccion);
    console.log("FORM Inovacion CREATE", formconstruccion);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};


export const getConstrTotal = async (req, res) => {
  try {
    const formconstruccion = await prisma.formconstruccion.groupBy({
      by: ['tipodependenciaconstruccion'],
      _sum: {
        cantidadVallasIns: true,
        cantidadAguaAmericasObelisco: true,
        cantidadConto14:true,
        cantidadConto15:true
      },
    });
    res.send(formconstruccion);
  } catch (error) {
    res.status(403)
    console.log('error', error);
  }
};