import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany({
      include: {
        rol: true,
        dependenciaUsuario: true,
        formsaluds: true,
        formdifs: true,
        formspublicas: true,
        forminspeccionvigs: true,
        formtianguiss: true,
        formrecaudadoras: true,
        formalumbrados: true,
        formapublicos: true,
        formadrenajes: true,
        formaestrategicos: true,
        formsindicaturas: true,
        formmurbanos: true,
        formconservacios: true,
        forminnovacions: true,
        formpcivils: true,
        formconstruccions: true,
      },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(403)
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await prisma.usuarios.findUnique({
      where: {
        idUsuarios: Number(id),
      },
      include: {
        rol: true,
        dependenciaUsuario: true,
        formsaluds: true,
        formdifs: true,
        formspublicas: true,
        forminspeccionvigs: true,
        formtianguiss: true,
        formrecaudadoras: true,
        formalumbrados: true,
        formapublicos: true,
        formadrenajes: true,
        formaestrategicos: true,
        formsindicaturas: true,
        formmurbanos: true,
        formconservacios: true,
        forminnovacions: true,
        formpcivils: true,
        formconstruccions: true,
      },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(403)
  }
};

export const deleteUser = async (req, res) => {
  try {
    const {visible} = req.body;
    const { id } = req.params;
    const usuarios = await prisma.usuarios.update({
      where: { idUsuarios: Number(id) },
      data: {
        visible,
      },
    });
    res.send(usuarios);
    console.log(usuarios);
  } catch (error) {
    res.send("NO SE PUEDE ACTUALIZAR ESTE USUARIO");
  }
};

export const updateUser = async (req, res) => {
  try {
    const {nombre,apellido,telefono,correo,contrasena,noEmpleado,rolUsuario,tipodependencia} = req.body;
    const { id } = req.params;
    const usuarios = await prisma.usuarios.update({
      where: { idUsuarios: Number(id) },
      data: {
        nombre,
        apellido,
        telefono,
        correo,
        contrasena,
        noEmpleado,
        dependenciaUsuario: {
          connect: { idDependencia: Number(tipodependencia) },
        },
        rol: {
          connect: { idRol: Number(rolUsuario) },
        },
      },
    });
    res.send(usuarios);
    console.log(usuarios);
  } catch (error) {
    res.send("NO SE PUEDE ACTUALIZAR ESTE USUARIO");
  }
};

export const createUser = async (req, res) => {
  try {
    const {nombre,apellido,telefono,correo,contrasena,noEmpleado,rolUsuario,tipodependencia} = req.body;
    const usuarios = await prisma.usuarios.create({
      data: {
        nombre,
        apellido,
        telefono,
        correo,
        contrasena,
        noEmpleado,
        rol: {
          connect: { idRol: Number(rolUsuario) },
        },
        dependenciaUsuario: {
          connect: { idDependencia: Number(tipodependencia) },
        },
      },
    });
    res.send(usuarios);
    console.log("USUARIOS CREATE", usuarios);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE REGISTRO");
  }
};
