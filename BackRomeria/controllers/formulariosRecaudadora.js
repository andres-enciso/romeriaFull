import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getRecaudadora = async (req, res) => {
  try {
    const formrecaudadora = await prisma.formrecaudadora.findMany({
      include: {
        usuariosRespondReca: true,
      },
    });
    res.send(formrecaudadora);
  } catch (error) {
    res.status(403)
  }
};

export const getRecaTotal = async (req, res) => {
  try {
    const formrecaudadora = await prisma.formrecaudadora.groupBy({
      by: ['tipodependenciareca'],
      _sum: {
        cantidadRecaudado: true
      },
    });
    res.send(formrecaudadora);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormRecaudadoraById = async (req, res) => {
  try {
    const { id } = req.params;
    const formrecaudadora = await prisma.formrecaudadora.findUnique({
      where: {
        idRecaudadora: Number(id),
      },
      include: {
        usuariosRespondReca: true,
      },
    });
    res.json(formrecaudadora);
  } catch (error) {
    res.status(403)
  }
};

export const createFormRecaudadora = async (req, res) => {
  try {
    const {
      cantidadRecaudado,
      msjMontoRecaudado,
      CobroZona1,
      msjCobroZona1,
      CobroZona2,
      msjCobroZona2,
      CobroZona3,
      msjCobroZona3,
      CobroZona4JMecanicos,
      msjCobroZona4JMecanicos,
      CobroZonaAmortiguamiento,
      msjZonaAmortiguamiento,
      tipodependenciareca,
      usuariorespondioReca
    } = req.body;

    const formrecaudadora = await prisma.formrecaudadora.create({
      data: {
        cantidadRecaudado,
        msjMontoRecaudado,
        CobroZona1,
        msjCobroZona1,
        CobroZona2,
        msjCobroZona2,
        CobroZona3,
        msjCobroZona3,
        CobroZona4JMecanicos,
        msjCobroZona4JMecanicos,
        CobroZonaAmortiguamiento,
        msjZonaAmortiguamiento,
        dependenciaRecaudadora: {
          connect: { idDependencia: Number(tipodependenciareca) },
        },
        usuariosRespondReca: {
          connect: { idUsuarios: Number(usuariorespondioReca) },
        },
      },
    });

    res.send(formrecaudadora);
    console.log("FORM SALUD CREATE", formrecaudadora);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
