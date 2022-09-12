import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getMUrbano = async (req, res) => {
  try {
    const formmejoramientourbano = await prisma.formmejoramientourbano.findMany(
      {
        include: {
          usuariosRespondMej: true,
        },
      }
    );
    res.send(formmejoramientourbano);
  } catch (error) {
    res.status(403)
  }
};

export const getMurbanoTotal = async (req, res) => {
  try {
    const formmejoramientourbano = await prisma.formmejoramientourbano.groupBy({
      by: ['tipodependenciamejoramiento'],
      _sum: {
        cantidadToneladasBasuraReco: true,
        cantidadOperativoMejBarridoManualMecanico: true
      },
    });
    res.send(formmejoramientourbano);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormMUrbanoById = async (req, res) => {
  try {
    const { id } = req.params;
    const formmejoramientourbano =
      await prisma.formmejoramientourbano.findUnique({
        where: {
            idMUrbano: Number(id),
        },
        include: {
          usuariosRespondMej: true,
        },
      });
    res.json(formmejoramientourbano);
  } catch (error) {
    res.status(403)
  }
};

export const createFormMUrbano = async (req, res) => {
  try {
    const {
      cantidadToneladasBasuraReco,
      msjToneladasBasuraReco,
      cantidadOperativoMejBarridoManualMecanico,
      msjOperativoMejBarridoManualMecanico,
      LimpiezaAmericasDia12,
      msjLimpiezaAmericasDia12,
      LimpiezaAvilaCamDia12,
      msjLimpiezaAvilaCamDia12,
      LimpiezaLaurelesDia12,
      msjLimpiezaLaurelesDia12,
      LimpiezaPatriaDia12,
      msjLimpiezaPatriaDia12,
      LimpiezaAurelioOrtegaDia12,
      msjLimpiezaAurelioOrtegaDia12,
      tipodependenciamejoramiento,
      usuariorespondioMej
    } = req.body;

    const formmejoramientourbano = await prisma.formmejoramientourbano.create({
      data: {
        cantidadToneladasBasuraReco,
        msjToneladasBasuraReco,
        cantidadOperativoMejBarridoManualMecanico,
        msjOperativoMejBarridoManualMecanico,
        LimpiezaAmericasDia12,
        msjLimpiezaAmericasDia12,
        LimpiezaAvilaCamDia12,
        msjLimpiezaAvilaCamDia12,
        LimpiezaLaurelesDia12,
        msjLimpiezaLaurelesDia12,
        LimpiezaPatriaDia12,
        msjLimpiezaPatriaDia12,
        LimpiezaAurelioOrtegaDia12,
        msjLimpiezaAurelioOrtegaDia12,
        dependenciaMUrbano: {
          connect: { idDependencia: Number(tipodependenciamejoramiento) },
        },
        usuariosRespondMej: {
          connect: { idUsuarios: Number(usuariorespondioMej) },
        },
      },
    });

    res.send(formmejoramientourbano);
    console.log("FORM SALUD CREATE", formmejoramientourbano);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
