import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getPCivil = async (req, res) => {
  try {
    const formpcivil = await prisma.formpcivil.findMany({
      include: {
        usuariosRespondPcivil: true,
      },
    });
    res.send(formpcivil);
  } catch (error) {
    res.status(403)
  }
};

export const getFormPCivilById = async (req, res) => {
  try {
    const { id } = req.params;
    const formpcivil = await prisma.formpcivil.findUnique({
      where: {
        idPCivil: Number(id),
      },
      include: {
        usuariosRespondPcivil: true,
      },
    });
    res.json(formpcivil);
  } catch (error) {
    res.status(403)
  }
};

export const getPcivilTotal = async (req, res) => {
  try {
    const formpcivil = await prisma.formpcivil.groupBy({
      by: ['tipodependenciapcivil'],
      _sum: {
        cantidadComSiCumplioNormas: true,
        cantidadComNoCumplioNormas: true,
        cantidadDeteccionClausuraGasLp:true,
        cantidadComerInspecc:true,
        cantidadPersonasAtendModu:true,
        cantidadServIntinRealizados:true

      },
    });
    res.send(formpcivil);
  } catch (error) {
    res.status(403)
    console.log('error', error);
  }
};

export const createFormPCivil = async (req, res) => {
  try {
    const {
      cantidadComSiCumplioNormas,
      msjComSiCumplioNormas,
      cantidadComNoCumplioNormas,
      msjComNoCumplioNormas,
      cantidadDeteccionClausuraGasLp,
      msjDeteccionClausuraGasLp,
      cantidadComerInspecc,
      msjComerInspecc,
      cantidadPersonasAtendModu,
      msjPersonasAtendModu,
      cantidadServIntinRealizados,
      msjServIntinRealizados,
      Mod1PlzCaudillos,
      msjMod1PlzCaudillos,
      Mod2AndadorNovAmericas,
      msjMod2AndadorNovAmericas,
      Mod3AmericasMixton,
      msjMod3AmericasMixton,
      Mod4AmericasRomanos,
      msjMod4AmericasRomanos,
      Mod5AmericasPatria,
      msjMod5AmericasPatria,
      Mod66AvilaObelisco,
      msjMod66AvilaObelisco,
      Mod7AvilaJacarandas,
      msjMod7AvilaJacarandas,
      MotobombaHidalgoZapata,
      msjMotobombaHidalgoZapata,
      PipaAguaCamachoPatria,
      msjPipaAguaCamachoPatria,
      PipaAguaLaurelesJManuel,
      msjPipaAguaLaurelesJManuel,
      InstModGrpUSAR,
      msjInstModGrpUSAR,
      tipodependenciapcivil,
      usuariorespondioPcivil
    } = req.body;

    const formpcivil = await prisma.formpcivil.create({
      data: {
        cantidadComSiCumplioNormas,
        msjComSiCumplioNormas,
        cantidadComNoCumplioNormas,
        msjComNoCumplioNormas,
        cantidadDeteccionClausuraGasLp,
        msjDeteccionClausuraGasLp,
        cantidadComerInspecc,
        msjComerInspecc,
        cantidadPersonasAtendModu,
        msjPersonasAtendModu,
        cantidadServIntinRealizados,
        msjServIntinRealizados,
        Mod1PlzCaudillos,
        msjMod1PlzCaudillos,
        Mod2AndadorNovAmericas,
        msjMod2AndadorNovAmericas,
        Mod3AmericasMixton,
        msjMod3AmericasMixton,
        Mod4AmericasRomanos,
        msjMod4AmericasRomanos,
        Mod5AmericasPatria,
        msjMod5AmericasPatria,
        Mod66AvilaObelisco,
        msjMod66AvilaObelisco,
        Mod7AvilaJacarandas,
        msjMod7AvilaJacarandas,
        MotobombaHidalgoZapata,
        msjMotobombaHidalgoZapata,
        PipaAguaCamachoPatria,
        msjPipaAguaCamachoPatria,
        PipaAguaLaurelesJManuel,
        msjPipaAguaLaurelesJManuel,
        InstModGrpUSAR,
        msjInstModGrpUSAR,
        dependenciaCivil: {
          connect: { idDependencia: Number(tipodependenciapcivil) },
        },
        usuariosRespondPcivil: {
          connect: { idUsuarios: Number(usuariorespondioPcivil) },
        },
      },
    });

    res.send(formpcivil);
    console.log("FORM Inovacion CREATE", formpcivil);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
