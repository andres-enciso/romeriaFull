import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getSalud = async (req, res) => {
  try {
    const formsalud = await prisma.formsalud.findMany({
      include: {
        dependenciaSalud: true,
        usuariosRespond: true,
      },
    });
    res.send(formsalud);
  } catch (error) {
    res.status(403)
  }
};

export const getSaludTotal = async (req, res) => {
  try {
    const formsalud = await prisma.formsalud.groupBy({
      by: ['tipodependenciasalud'],
      _sum: {
        cantidadDeshidratacion: true,
        cantidadHipertension: true,
        cantidaPediatrico:true,
        cantidadInfartoMiocardio:true,
        cantidadConvulsivos:true,
        cantidadEnfRespiratoria:true,
        cantidadEnfGatrointestinal:true,
        cantidadFebrilesExa:true,
        cantidadCefaleas:true,
        cantidadDiabetico:true,
        cantidadIntoxicacion:true,
        cantidadCaidas:true,
        cantidadQuemaduras:true,
        cantidadChoque:true,
        cantidadVolcadura:true,
        cantidadMuscoloesqueletico:true,
        cantidadArmablanca:true,
        cantidadArmadefuego:true,
        cantidadOtros:true,
        cantidadAdultos:true,
        cantidadAdultoMayor:true,
        cantidadFemenino:true,
        cantidadMasculino:true,
        cantidadIntermedio:true,
        cantidadTransladados:true
      },
    });
    res.send(formsalud);
  } catch (error) {
    res.status(403)
    console.log('error', error);
  }
};

export const getFormSaludById = async (req, res) => {
  try {
    const { id } = req.params;
    const formsalud = await prisma.formsalud.findUnique({
      where: {
        idPreguntasSalud: Number(id),
      },
      include: {
        dependenciaSalud: true,
        usuariosRespond: true,
      },
    });
    res.json(formsalud);
  } catch (error) {
    res.status(403)
  }
};

export const createFormsalud = async (req, res) => {
  try {
    const {
      
      cantidadDeshidratacion,
      msjDeshidratacion,
      cantidadHipertension,
      msjHipertension,
      cantidadInfartoMiocardio,
      msjInfartoMiocardio,
      cantidadConvulsivos,
      msjConvulsivos,
      cantidadEnfRespiratoria,
      msjEnfRespiratoria,
      cantidadEnfGatrointestinal,
      msjEnfGatrointestinal,
      cantidadFebrilesExa,
      msjFebrilesExa,
      cantidadCefaleas,
      msjCefaleas,
      cantidadDiabetico,
      msjDiabetico,
      cantidadoxicacion,
      msjoxicacion,
      cantidadCaidas,
      msjCaidas,
      cantidadQuemaduras,
      msjQuemaduras,
      cantidadAtropellado,
      msjAtropellado,
      cantidadChoque,
      msjChoque,
      cantidadVolcadura,
      msjVolcadura,
      cantidadMuscoloesqueletico,
      msjMuscoloesqueletico,
      cantidadArmablanca,
      msjArmablanca,
      cantidadArmadefuego,
      msjArmadefuego,
      cantidadOtros,
      msjOtros,
      cantidaPediatrico,
      msjPediatrico,
      cantidadAdultos,
      msjAdultos,
      cantidadAdultoMayor,
      msjAdultoMayor,
      cantidadFemenino,
      msjFemenino,
      cantidadMasculino,
      msjMasculino,
      cantidadermedio,
      msjermedio,
      cantidadTransladados,
      msjTransladados,
      cantidadIntermedio,
      msjIntermedio,
      oKPunto1,
      msjPunto1,
      oKPunto2,
      msjPunto2,
      oKPunto3,
      cantidadIntoxicacion,
      msjIntoxicacion,
      msjPunto3,
      oKPunto4,
      msjPunto4,
      oKPunto5,
      msjPunto5,
      oKPunto6,
      msjPunto6,
      tipodependenciasalud,
      usuariorespondio
    } = req.body;

    const formsalud = await prisma.formsalud.create({
      data: {
        cantidadDeshidratacion,
        msjDeshidratacion,
        cantidadHipertension,
        msjHipertension,
        cantidadInfartoMiocardio,
        msjInfartoMiocardio,
        cantidadConvulsivos,
        msjConvulsivos,
        cantidadEnfRespiratoria,
        msjEnfRespiratoria,
        cantidadEnfGatrointestinal,
        msjEnfGatrointestinal,
        cantidadFebrilesExa,
        msjFebrilesExa,
        cantidadCefaleas,
        msjCefaleas,
        cantidadDiabetico,
        msjDiabetico,
        cantidadIntoxicacion,
        cantidadermedio,
        msjermedio,
        msjIntoxicacion,
        cantidadoxicacion,
        msjoxicacion,
        cantidadCaidas,
        msjCaidas,
        cantidadQuemaduras,
        msjQuemaduras,
        cantidadAtropellado,
        msjAtropellado,
        cantidadChoque,
        msjChoque,
        cantidadVolcadura,
        msjVolcadura,
        cantidadMuscoloesqueletico,
        msjMuscoloesqueletico,
        cantidadArmablanca,
        msjArmablanca,
        cantidadArmadefuego,
        msjArmadefuego,
        cantidadOtros,
        msjOtros,
        cantidaPediatrico,
        msjPediatrico,
        cantidadAdultos,
        msjAdultos,
        cantidadAdultoMayor,
        msjAdultoMayor,
        cantidadFemenino,
        msjFemenino,
        cantidadMasculino,
        msjMasculino,
        cantidadIntermedio,
        msjIntermedio,
        cantidadTransladados,
        msjTransladados,
        oKPunto1,
        msjPunto1,
        oKPunto2,
        msjPunto2,
        oKPunto3,
        msjPunto3,
        oKPunto4,
        msjPunto4,
        oKPunto5,
        msjPunto5,
        oKPunto6,
        msjPunto6,
        dependenciaSalud: {
          connect: { idDependencia: Number(tipodependenciasalud) },
        },
        usuariosRespond: {
          connect: { idUsuarios: Number(usuariorespondio) },
        },
      },
    });

    res.send(formsalud);
    console.log("FORM SALUD CREATE", formsalud);
  } catch (error) {
    res.status(403)
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
