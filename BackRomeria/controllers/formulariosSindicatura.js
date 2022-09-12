import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getSindicatura = async (req, res) => {
  try {
    const formsindicatura = await prisma.formsindicatura.findMany({
      include: {
        usuariosRespondSind: true,
      },
    });
    res.send(formsindicatura);
  } catch (error) {
    res.status(403)
  }
};

export const getSindicaturaById = async (req, res) => {
  try {
    const { id } = req.params;
    const formsindicatura = await prisma.formsindicatura.findUnique({
      where: {
        idSindicatura: Number(id),
      },
      include: {
        usuariosRespondSind: true,
      },
    });
    res.json(formsindicatura);
  } catch (error) {
    res.status(403)
  }
};

export const getSindicaturaTotal = async (req, res) => {
  try {
    const formsindicatura = await prisma.formsindicatura.groupBy({
      by: ['tipodependenciasindicatura'],
      _sum: {
        cantidadActasCalificadas: true
      },
    });
    res.send(formsindicatura);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const createSindicatura = async (req, res) => {
  try {
    const {
      cantidadActasCalificadas,
      msjActasCalificadas,
      tipodependenciasindicatura,
      usuariorespondioSind
    } = req.body;

    const formsindicatura = await prisma.formsindicatura.create({
      data: {
        cantidadActasCalificadas,
        msjActasCalificadas,
        dependenciaSindicatura: {
          connect: { idDependencia: Number(tipodependenciasindicatura) },
        },
        usuariosRespondSind: {
          connect: { idUsuarios: Number(usuariorespondioSind) },
        },
      },
    });

    res.send(formsindicatura);
    console.log("FORM SALUD CREATE", formsindicatura);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
