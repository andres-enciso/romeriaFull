import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getInspeccionvig = async (req, res) => {
  try {
    const forminspeccionvig = await prisma.forminspeccionvig.findMany({
      include: {
        usuariosRespondVig: true,
      },
    });
    res.send(forminspeccionvig);
  } catch (error) {
    res.status(403)
  }
};

export const getInspaccionTotal = async (req, res) => {
  try {
    const forminspeccionvig = await prisma.forminspeccionvig.groupBy({
      by: ['tipodependenciainspeccion'],
      _sum: {
        cantidadActasConDecomisoZona: true,
        cantidadActasConDecomisoRutaEvac: true,
        cantidadActasComercioEstab: true,
        cantidadClausurasComEstablecido: true,
        cantidadClausuraLeySeca: true,
        cantidadClausurasJMecanicos: true,
        cantidadClausuraInfraccDiversas: true,
      },
    });
    res.send(forminspeccionvig);
  } catch (error) {
    res.status(403)
    console.log('error', error);s
  }
};

export const getFormInspeccionvigById = async (req, res) => {
  try {
    const { id } = req.params;
    const forminspeccionvig = await prisma.forminspeccionvig.findUnique({
      where: {
        idInspeccionVig: Number(id),
      },
      include: {
        usuariosRespondVig: true,
      },
    });
    res.json(forminspeccionvig);
  } catch (error) {
    res.status(403)
  }
};

export const createFormInspeccionvig = async (req, res) => {
  try {
    const {
      cantidadActasConDecomisoZona,
      cantidadActasConDecomisoRutaEvac,
      msjActasDecomiso,
      cantidadActasComercioEstab,
      msjActasComercioEstab,
      cantidadClausurasComEstablecido,
      msjClausurasComEstablecido,
      cantidadClausuraLeySeca,
      msjClausuraLeySeca,
      cantidadClausurasJMecanicos,
      msjClausurasJMecanicos,
      cantidadClausuraInfraccDiversas,
      msjClausuraInfraccDiversas,
      tipodependenciainspeccion,
      usuariorespondioVig
    } = req.body;

    const forminspeccionvig = await prisma.forminspeccionvig.create({
      data: {
        cantidadActasConDecomisoZona,
        cantidadActasConDecomisoRutaEvac,
        msjActasDecomiso,
        cantidadActasComercioEstab,
        msjActasComercioEstab,
        cantidadClausurasComEstablecido,
        msjClausurasComEstablecido,
        cantidadClausuraLeySeca,
        msjClausuraLeySeca,
        cantidadClausurasJMecanicos,
        msjClausurasJMecanicos,
        cantidadClausuraInfraccDiversas,
        msjClausuraInfraccDiversas,
        dependenciaInspeccion: {
          connect: { idDependencia: Number(tipodependenciainspeccion) },
        },
        usuariosRespondVig: {
          connect: { idUsuarios: Number(usuariorespondioVig) },
        },
      },
    });

    res.send(forminspeccionvig);
    console.log("FORM SALUD CREATE", forminspeccionvig);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
