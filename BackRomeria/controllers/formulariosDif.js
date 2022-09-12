import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getDif = async (req, res) => {
  try {
    const formdif = await prisma.formdif.findMany({
      include: {
        usuariosrespondDif: true,
      },
    });
    res.send(formdif);
  } catch (error) {
    res.status(403)
  }
};

export const getDifTotal = async (req, res) => {
  try {
    const formdif = await prisma.formdif.groupBy({
      by: ['tipodependenciadif'],
      _sum: {
        cantidadMenores18: true,
        cantidadAdultos18a59: true,
        cantidadAdultosMay60:true,
        cantidadAdDiscapacitados:true

      },
    });
    res.send(formdif);
  } catch (error) {
    res.status(403)
    console.log('error', error);
  }
};

export const getFormDifById = async (req, res) => {
  try {
    const { id } = req.params;
    const formdif = await prisma.formdif.findUnique({
      where: {
        idPreguntasDif: Number(id),
      },
      include: {
        usuariosrespondDif: true,
      },
    });
    res.json(formdif);
  } catch (error) {
    res.status(403)
  }
};

export const createFormDif = async (req, res) => {
  try {
    const {
      cantidadMenores18,
      msjMenores18,
      cantidadAdultos18a59,
      msjAdultos18a59,
      cantidadAdultosMay60,
      msjAdultosMay60,
      cantidadAdDiscapacitados,
      msjAdDiscapacitados,
      conceptoInstModPresiMun,
      msjInstModPresiMun,
      conceptoInstModAvilaLaureles,
      msjInstModAvilaLaureles,
      conceptoInstModPerExtravAmericaEsparta,
      msjInstModPerExtravAmericaEsparta,
      conceptoInstModPerExtravAmericaObelisco,
      msjInstModPerExtravAmericaObelisco,
      tipodependenciadif,
      usuariorespondiodif
    } = req.body;

    const formdif = await prisma.formdif.create({
      data: {
        cantidadMenores18,
        msjMenores18,
        cantidadAdultos18a59,
        msjAdultos18a59,
        cantidadAdultosMay60,
        msjAdultosMay60,
        cantidadAdDiscapacitados,
        msjAdDiscapacitados,
        conceptoInstModPresiMun,
        msjInstModPresiMun,
        conceptoInstModAvilaLaureles,
        msjInstModAvilaLaureles,
        conceptoInstModPerExtravAmericaEsparta,
        msjInstModPerExtravAmericaEsparta,
        conceptoInstModPerExtravAmericaObelisco,
        msjInstModPerExtravAmericaObelisco,
        dependenciaDif: {
          connect: { idDependencia: Number(tipodependenciadif) },
        },
        usuariosrespondDif: {
          connect: { idUsuarios: Number(usuariorespondiodif) },
        },
      },
    });

    res.send(formdif);
    console.log("FORM SALUD CREATE", formdif);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
