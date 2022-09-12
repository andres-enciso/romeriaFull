import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getTianguis = async (req, res) => {
  try {
    const formtianguis = await prisma.formtianguis.findMany({
      include: {
        usuariosRespondTia: true,
      },
    });
    res.send(formtianguis);
  } catch (error) {
    res.status(403)
  }
};

export const getTianguisTotal = async (req, res) => {
  try {
    const formtianguis = await prisma.formtianguis.groupBy({
      by: ['tipodependenciatianguis'],
      _sum: {
        cantidadComerciantesInst: true,
        cantidadComercio: true,
        cantidadJuegos: true
      },
    });
    res.send(formtianguis);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormTianguisById = async (req, res) => {
  try {
    const { id } = req.params;
    const formtianguis = await prisma.formtianguis.findUnique({
      where: {
        idTianguis: Number(id),
      },
      include: {
        usuariosRespondTia: true,
      },
    });
    res.json(formtianguis);
  } catch (error) {
    res.status(403)
  }
};

export const createFormTianguis = async (req, res) => {
  try {
    const {
      cantidadComerciantesInst,
      msjComerciantesInst,
      cantidadComercio,
      msjComercio,
      cantidadJuegos,
      msjJuegos,
      callesZona1,
      callesZona2,
      callesZona3,
      callesZona4,
      zonaAmortiguamiento,
      tipodependenciatianguis,
      usuariorespondioTia
    } = req.body;

    const formtianguis = await prisma.formtianguis.create({
      data: {
        cantidadComerciantesInst,
        msjComerciantesInst,
        cantidadComercio,
        msjComercio,
        cantidadJuegos,
        msjJuegos,
        callesZona1,
        callesZona2,
        callesZona3,
        callesZona4,
        zonaAmortiguamiento,
        dependenciaTianguis: {
          connect: { idDependencia: Number(tipodependenciatianguis) },
        },
        usuariosRespondTia: {
          connect: { idUsuarios: Number(usuariorespondioTia) },
        },
      },
    });

    res.send(formtianguis);
    console.log("FORM SALUD CREATE", formtianguis);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
