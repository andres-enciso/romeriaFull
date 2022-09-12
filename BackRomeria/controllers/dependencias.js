import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getDependencia =async (req, res) => {
  try {
    const dependencias = await prisma.dependencias.findMany({});
    res.send(dependencias);
  } catch (error) {
    res.status(403)
  }


};

export const getDependenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const dependencias = await prisma.dependencias.findUnique({
      where: {
        idDependencia: Number(id),
      },
    });
    res.json(dependencias);
  } catch (error) {
    res.status(403)
  }
};

export const deleteDependencia = async (req, res) => {
  try {
    const { id } = req.params;
    const dependencias = await prisma.dependencias.delete({
      where: {
        idDependencia: Number(id),
      },
    });
    res.send(dependencias);
  } catch (error) {
    res.status(403).send("ELIMINADO CORRECTAMENTE");
  }
};

export const updateDependencia = async (req, res) => {
  try {

    const {nombreDependencia} = req.body;
    const { id } = req.params;

    const dependencias = await prisma.dependencias.update({
      where: { idDependencia: Number(id) },
      data: {
        nombreDependencia,
      },
    });
    res.send(dependencias);
    console.log("Dependencia CREATE", dependencias);
    
  } catch (error) {
    res.status(403).send("NO SE PUDO ACTUALIZAR ESTE REGISTRO");
  }
};

export const createDependencia = async (req, res) => {
  try {
    const {nombreDependencia} = req.body;
    const dependencias = await prisma.dependencias.create({
      data: {
        nombreDependencia,
      },
    });
    res.send(dependencias);
    console.log("Dependencia CREATE", dependencias);
    
  } catch (error) {
    res.status(403).send("NO SE PUDO CREAR ESTE REGISTRO");
  }
};
