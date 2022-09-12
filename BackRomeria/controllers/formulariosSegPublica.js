import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getSegPublica = async (req, res) => {
  try {
    const formseguridadpublica = await prisma.formseguridadpublica.findMany({
      include: {
        usuariosRespondPublica: true,
      },
    });
    res.send(formseguridadpublica);
  } catch (error) {
    res.status(403)
  }
};

export const getSegpTotal = async (req, res) => {
  try {
    const formseguridadpublica = await prisma.formseguridadpublica.groupBy({
      by: ['tipodependenciasegpublica'],
      _sum: {
        cantidadAdultosEnervantes: true,
        cantidadMenoresEnervantes: true,
        cantidadAdultosArmaFuego: true,
        cantidadMenoresArmaFuego: true,
        cantidadAdultosBebidasEmbriagantes: true,
        cantidadMenoresBebidasEmbriagantes: true,
        cantidadMenoresAlterarOrden: true,
        cantidadAdultosAlterarOrden: true,
        cantidadMenoresFaltaAdmin: true,
        cantidadAdultosFaltaAdmin: true,
        cantidadAdultosOtroServicio: true,
        cantidadMenoresOtroServicio: true,
      },
    });
    res.send(formseguridadpublica);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormSegPublicaById = async (req, res) => {
  try {
    const { id } = req.params;
    const formseguridadpublica = await prisma.formseguridadpublica.findUnique({
      where: {
        idPreguntasSPublica: Number(id),
      },
      include: {
        usuariosRespondPublica: true,
      },
    });
    res.json(formseguridadpublica);
  } catch (error) {
    res.status(403)
  }
};

export const createFormSegPublica = async (req, res) => {
  try {
    const {
      cantidadAdultosEnervantes,
      cantidadMenoresEnervantes,
      msjEnervantes,
      cantidadAdultosArmaFuego,
      cantidadMenoresArmaFuego,
      msjArmaFuego,
      cantidadAdultosBebidasEmbriagantes,
      cantidadMenoresBebidasEmbriagantes,
      msjBebidasEmbriagantes,
      cantidadMenoresAlterarOrden,
      cantidadAdultosAlterarOrden,
      msjAlterarOrden,
      cantidadMenoresFaltaAdmin,
      cantidadAdultosFaltaAdmin,
      msjFaltaAdmin,
      cantidadAdultosOtroServicio,
      cantidadMenoresOtroServicio,
      msjOtroServicio,
      tipodependenciasegpublica,
      usuariorespondioPublica
    } = req.body;

    const formseguridadpublica = await prisma.formseguridadpublica.create({
      data: {
        cantidadAdultosEnervantes,
        cantidadMenoresEnervantes,
        msjEnervantes,
        cantidadAdultosArmaFuego,
        cantidadMenoresArmaFuego,
        msjArmaFuego,
        cantidadAdultosBebidasEmbriagantes,
        cantidadMenoresBebidasEmbriagantes,
        msjBebidasEmbriagantes,
        cantidadMenoresAlterarOrden,
        cantidadAdultosAlterarOrden,
        msjAlterarOrden,
        cantidadMenoresFaltaAdmin,
        cantidadAdultosFaltaAdmin,
        msjFaltaAdmin,
        cantidadAdultosOtroServicio,
        cantidadMenoresOtroServicio,
        msjOtroServicio,
        dependenciaSpublica: {
          connect: { idDependencia: Number(tipodependenciasegpublica) },
        },
        usuariosRespondPublica: {
          connect: { idUsuarios: Number(usuariorespondioPublica) },
        },
      },
    });

    res.send(formseguridadpublica);
    console.log("FORM SALUD CREATE", formseguridadpublica);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
