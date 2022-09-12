import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getAlumbrado = async (req, res) => {
  try {
    const formalumbrado = await prisma.formalumbrado.findMany({
      include: {
        usuariosRespondAlum: true,
      },
    });
    res.send(formalumbrado);
  } catch (error) {
    res.status(403)
  }
};


export const getAlumbradoTotal = async (req, res) => {
  try {
    const formalumbrado = await prisma.formalumbrado.groupBy({
      by: ['tipodependenciaslumbrado'],
      _sum: {
        cantidadRevisionRealizadaComerciantes: true,
        cantidadModConectados: true
      },
    });
    res.send(formalumbrado);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormAlumbradoById = async (req, res) => {
  try {
    const { id } = req.params;
    const formalumbrado = await prisma.formalumbrado.findUnique({
      where: {
        idAlumbrado: Number(id),
      },
      include: {
        usuariosRespondAlum: true,
      },
    });
    res.json(formalumbrado);
  } catch (error) {
    res.status(403)
  }
};

export const createFormAlumbrado = async (req, res) => {
  try {
    const {
      cantidadRevisionRealizadaComerciantes,
      msjRevisionRealizadaComerciantes,
      cantidadModConectados,
      msjModConectados,
      tipodependenciaslumbrado,
      usuariorespondioAlum
    } = req.body;

    const formalumbrado = await prisma.formalumbrado.create({
      data: {
        cantidadRevisionRealizadaComerciantes,
        msjRevisionRealizadaComerciantes,
        cantidadModConectados,
        msjModConectados,
        dependenciaAlumbrado: {
          connect: { idDependencia: Number(tipodependenciaslumbrado) },
        },
        usuariosRespondAlum: {
          connect: { idUsuarios: Number(usuariorespondioAlum) },
        },
      },
    });

    res.send(formalumbrado);
    console.log("FORM SALUD CREATE", formalumbrado);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
