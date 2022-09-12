import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getAnalisis = async (req, res) => {
  try {
    const formanalisisestrategico =
      await prisma.formanalisisestrategico.findMany({
        include: {
          usuariosRespondAna: true,
        },
      });
    res.send(formanalisisestrategico);
  } catch (error) {
    res.status(403)
  }
};

export const getAnalisisTotal = async (req, res) => {
  try {
    const formanalisisestrategico = await prisma.formanalisisestrategico.groupBy({
      by: ['tipodependenciaanaestrategico'],
      _sum: {
        cantidadMediosComuAendidos: true,
        cantidadMediosCobertura: true,
        cantidadAtencionLogistica: true,
      },
    });
    res.send(formanalisisestrategico);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};


export const getFormAnalisispById = async (req, res) => {
  try {
    const { id } = req.params;
    const formanalisisestrategico =
      await prisma.formanalisisestrategico.findUnique({
        where: {
          idAEstrategico: Number(id),
        },
        include: {
          usuariosRespondAna: true,
        },
      });
    res.json(formanalisisestrategico);
  } catch (error) {
    res.status(403)
  }
};

export const createFormAnalisis = async (req, res) => {
  try {
    const {
      cantidadMediosComuAendidos,
      msjMediosComuAendidos,
      cantidadMediosCobertura,
      msjMediosCobertura,
      cantidadAtencionLogistica,
      msjAtencionLogistica,
      SalaPrensaS,
      msjSalaPrensa,
      CierreSalaPrensa,
      msjCierreSalaPrensa,
      InstalacionMediosPAmericas,
      msjInstalacionMediosPAmericas,
      InstalacionMediosUBasilica,
      msjInstalacionMediosUBasilica,
      InstalacionMediosEvaBriseno,
      msjInstalacionMediosEvaBriseno,
      CorteInfo11Oct,
      msjCorteInfo11Oct,
      CorteInfo12Oct,
      msjCorteInfo12Oct,
      RuedaPMat12oct,
      msjRuedaPMat12oct,
      RuedaPFin12oct,
      msjRuedaPFin12oct,
      InstaComedorReporteros,
      msjInstaComedorReporteros,
      tipodependenciaanaestrategico,
      usuariorespondioAna
    } = req.body;

    const formanalisisestrategico = await prisma.formanalisisestrategico.create(
      {
        data: {
          cantidadMediosComuAendidos,
          msjMediosComuAendidos,
          cantidadMediosCobertura,
          msjMediosCobertura,
          cantidadAtencionLogistica,
          msjAtencionLogistica,
          SalaPrensaS,
          msjSalaPrensa,
          CierreSalaPrensa,
          msjCierreSalaPrensa,
          InstalacionMediosPAmericas,
          msjInstalacionMediosPAmericas,
          InstalacionMediosUBasilica,
          msjInstalacionMediosUBasilica,
          InstalacionMediosEvaBriseno,
          msjInstalacionMediosEvaBriseno,
          CorteInfo11Oct,
          msjCorteInfo11Oct,
          CorteInfo12Oct,
          msjCorteInfo12Oct,
          RuedaPMat12oct,
          msjRuedaPMat12oct,
          RuedaPFin12oct,
          msjRuedaPFin12oct,
          InstaComedorReporteros,
          msjInstaComedorReporteros,
          dependenciaAEstrategico: {
            connect: { idDependencia: Number(tipodependenciaanaestrategico) },
          },
          usuariosRespondAna: {
            connect: { idUsuarios: Number(usuariorespondioAna) },
          },
        },
      }
    );

    res.send(formanalisisestrategico);
    console.log("FORM SALUD CREATE", formanalisisestrategico);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
