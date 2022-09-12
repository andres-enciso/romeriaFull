import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getconservacion = async (req, res) => {
  try {
    const formconservacion = await prisma.formconservacion.findMany({
      include: {
        usuariosRespondConserv: true,
      },
    });
    res.send(formconservacion);
  } catch (error) {
    res.status(403)
  }
};

export const getConservacionTotal = async (req, res) => {
  try {
    const formconservacion = await prisma.formconservacion.groupBy({
      by: ['tipodependenciaconservacion'],
      _sum: {
        cantidadAtencionUnidadBasilica: true,
        cantidadAtencionPresidenciaMun: true,
        cantidadAtencionCOZ: true
      },
    });
    res.send(formconservacion);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormConservacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const formconservacion = await prisma.formconservacion.findUnique({
      where: {
        idConservacion: Number(id),
      },
      include: {
        usuariosRespondConserv: true,
      },
    });
    res.json(formconservacion);
  } catch (error) {
    res.status(403)
  }
};

export const createConservacion = async (req, res) => {
  try {
    const {
      cantidadAtencionUnidadBasilica,
      msjAtencionUnidadBasilica,
      cantidadAtencionPresidenciaMun,
      msjAtencionPresidenciaMun,
      cantidadAtencionCOZ,
      msjAtencionCOZ,
      ApoyoDanzantes,
      msjApoyoDanzantes,
      tipodependenciaconservacion,
      usuariorespondioConserv
    } = req.body;

    const formconservacion = await prisma.formconservacion.create({
      data: {
        cantidadAtencionUnidadBasilica,
        msjAtencionUnidadBasilica,
        cantidadAtencionPresidenciaMun,
        msjAtencionPresidenciaMun,
        cantidadAtencionCOZ,
        msjAtencionCOZ,
        ApoyoDanzantes,
        msjApoyoDanzantes,
        dependenciaConservacion: {
          connect: { idDependencia: Number(tipodependenciaconservacion) },
        },
        usuariosRespondConserv: {
          connect: { idUsuarios: Number(usuariorespondioConserv) },
        },
      },
    });

    res.send(formconservacion);
    console.log("FORM SALUD CREATE", formconservacion);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
