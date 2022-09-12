import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getInnovacion = async (req, res) => {
  try {
    const forminnovacion = await prisma.forminnovacion.findMany({
      include: {
        usuariosRespondInnov: true,
      },
    });
    res.send(forminnovacion);
  } catch (error) {
    res.status(403)
  }
};

export const getInovaccionTotal = async (req, res) => {
  try {
    const forminnovacion = await prisma.forminnovacion.groupBy({
      by: ['tipodependenciainnovacion'],
      _sum: {
        cantidadServiciosRealizados: true,
        cantidadAtencionRepoCentroMando: true,
        cantidadAtencionRepoSalaPrensa: true,
        cantidadAtencionCentOperaciones: true
      },
    });
    res.send(forminnovacion);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormInnovacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const forminnovacion = await prisma.forminnovacion.findUnique({
      where: {
        idInnovacion: Number(id),
      },
      include: {
        usuariosRespondInnov: true,
      },
    });
    res.json(forminnovacion);
  } catch (error) {
    res.status(403)
  }
};

export const createFormInnovacion = async (req, res) => {
  try {
    const {
        cantidadServiciosRealizados     ,
        msjServiciosRealizados          ,
        cantidadAtencionRepoCentroMando ,
        msjAtencionRepoCentroMando      ,
        cantidadAtencionRepoSalaPrensa  ,
        msjAtencionRepoSalaPrensa       ,
        cantidadAtencionCentOperaciones ,
        msjAtencionCentOperaciones      ,
        HabCentroMandoGnrl              ,
        msjHabCentroMandoGnrl           ,
        HabSalaPrensa                   ,
        msjHabSalaPrensa                ,
        HabCentroOpZpn                  ,
        msjHabCentroOpZpn               ,
        tipodependenciainnovacion       ,
        usuariorespondioInnov         
    } = req.body;

    const forminnovacion = await prisma.forminnovacion.create({
      data: {
        cantidadServiciosRealizados     ,
        msjServiciosRealizados          ,
        cantidadAtencionRepoCentroMando ,
        msjAtencionRepoCentroMando      ,
        cantidadAtencionRepoSalaPrensa  ,
        msjAtencionRepoSalaPrensa       ,
        cantidadAtencionCentOperaciones ,
        msjAtencionCentOperaciones      ,
        HabCentroMandoGnrl              ,
        msjHabCentroMandoGnrl           ,
        HabSalaPrensa                   ,
        msjHabSalaPrensa                ,
        HabCentroOpZpn                  ,
        msjHabCentroOpZpn               ,
        dependenciaInnovacion: {
          connect: { idDependencia: Number(tipodependenciainnovacion) },
        },
        usuariosRespondInnov: {
          connect: { idUsuarios: Number(usuariorespondioInnov) },
        },
      },
    });

    res.send(forminnovacion);
    console.log("FORM Inovacion CREATE", forminnovacion);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
