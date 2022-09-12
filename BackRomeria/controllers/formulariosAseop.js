import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getAseop = async (req, res) => {
  try {
    const formaseopublico = await prisma.formaseopublico.findMany({
      include: {
        usuariosRespondAseo: true,
      },
    });
    res.send(formaseopublico);
  } catch (error) {
    res.status(403)
  }
};

export const getFormAseopById = async (req, res) => {
  try {
    const { id } = req.params;
    const formaseopublico = await prisma.formaseopublico.findUnique({
      where: {
        idAPublico: Number(id),
      },
      include: {
        usuariosRespondAseo: true,
      },
    });
    res.json(formaseopublico);
  } catch (error) {
    res.status(403)
  }
};

export const getAseoTotal = async (req, res) => {
  try {
    const formaseopublico = await prisma.formaseopublico.groupBy({
      by: ['tipodependenciaaseopub'],
      _sum: {
        cantidadToneladasRecibidasPicachos: true,
        cantidadToneladasOperativoBarridoManual: true
      },
    });
    res.send(formaseopublico);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};


export const createFormAseop = async (req, res) => {
  try {
    const {
      cantidadToneladasRecibidasPicachos,
      msjToneladasRecibidasPicachos,
      cantidadToneladasOperativoBarridoManual,
      msjToneladasOperativoBarridoManual,
      ContenedorAmericaEsparta,
      msjContenedorAmericaEsparta,
      ContenedorAurelioJuanpabloii,
      msjContenedorAurelioJuanpabloii,
      SarcofagoLaureles,
      msjSarcofagoLaureles,
      HidalgoECarranza,
      msjHidalgoECarranza,
      VillaFantasia,
      msjVillaFantasia,
      LaurelesIndustria,
      msjLaurelesIndustria,
      PlazaPatria,
      msjPlazaPatria,
      PetAmericasRomanos,
      msjPetAmericasRomanos,
      PetPetAmericasMixton,
      msjPetAmericasMixton,
      PetLaurelesHidalgo,
      msjPetLaurelesHidalgo,
      tipodependenciaaseopub,
      usuariorespondioAseo
    } = req.body;

    const formaseopublico = await prisma.formaseopublico.create({
      data: {
        cantidadToneladasRecibidasPicachos,
        msjToneladasRecibidasPicachos,
        cantidadToneladasOperativoBarridoManual,
        msjToneladasOperativoBarridoManual,
        ContenedorAmericaEsparta,
        msjContenedorAmericaEsparta,
        ContenedorAurelioJuanpabloii,
        msjContenedorAurelioJuanpabloii,
        SarcofagoLaureles,
        msjSarcofagoLaureles,
        HidalgoECarranza,
        msjHidalgoECarranza,
        VillaFantasia,
        msjVillaFantasia,
        LaurelesIndustria,
        msjLaurelesIndustria,
        PlazaPatria,
        msjPlazaPatria,
        PetAmericasRomanos,
        msjPetAmericasRomanos,
        PetPetAmericasMixton,
        msjPetAmericasMixton,
        PetLaurelesHidalgo,
        msjPetLaurelesHidalgo,
        dependenciaAPublico: {
          connect: { idDependencia: Number(tipodependenciaaseopub) },
        },
        usuariosRespondAseo: {
          connect: { idUsuarios: Number(usuariorespondioAseo) },
        },
      },
    });

    res.send(formaseopublico);
    console.log("FORM SALUD CREATE", formaseopublico);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
