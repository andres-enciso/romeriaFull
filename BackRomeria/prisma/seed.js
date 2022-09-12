import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { register } from '../controllers/register.js';

async function main(req, res) {
    
  const admin = await prisma.roles.upsert({
    create: {
      tipoRol: 'Administrador',
    },
    update: {
      tipoRol: 'Administrador',
    },
    where: {
      idRol: 1,
    },
  })

  const empleado = await prisma.roles.upsert({
    create: {
      tipoRol: 'Empleado',
    },
    update: {
      tipoRol: 'Empleado',
    },
    where: {
      idRol: 2,
    },
  })

  console.log({ admin, empleado })

  const depConstr = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Construcción de la comunidad',
    },
    update: {
      nombreDependencia: 'Construcción de la comunidad',
    },
    where: {
      idDependencia: 1,
    },
  })

  const depDif = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'DIF',
    },
    update: {
      nombreDependencia: 'DIF',
    },
    where: {
      idDependencia: 2,
    },
  })

  const depSalud = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Servicios de Salud',
    },
    update: {
      nombreDependencia: 'Servicios de Salud',
    },
    where: {
      idDependencia: 3,
    },
  })

  const depSpublica = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Seguridad Pública',
    },
    update: {
      nombreDependencia: 'Seguridad Pública',
    },
    where: {
      idDependencia: 4,
    },
  })

  const depViglancias = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Inspección y Vigilancia',
    },
    update: {
      nombreDependencia: 'Inspección y Vigilancia',
    },
    where: {
      idDependencia: 5,
    },
  })
  const depTianguis = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Tianguis',
    },
    update: {
      nombreDependencia: 'Tianguis',
    },
    where: {
      idDependencia: 6,
    },
  })

  const depReca = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Recaudadora 05',
    },
    update: {
      nombreDependencia: 'Recaudadora 05',
    },
    where: {
      idDependencia: 7,
    },
  })

  const depAlum = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Alumbrado Publico',
    },
    update: {
      nombreDependencia: 'Alumbrado Publico',
    },
    where: {
      idDependencia: 8,
    },
  })

  const depAseo = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Aseo Publico',
    },
    update: {
      nombreDependencia: 'Aseo Publico',
    },
    where: {
      idDependencia: 9,
    },
  })

  const depAgua = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Agua y Drenaje',
    },
    update: {
      nombreDependencia: 'Agua y Drenaje',
    },
    where: {
      idDependencia: 10,
    },
  })

  const depAnalisis = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Análisis estratégico y Comunicación',
    },
    update: {
      nombreDependencia: 'Análisis estratégico y Comunicación',
    },
    where: {
      idDependencia: 11,
    },
  })

  const depSind = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Sindicatura Municipal',
    },
    update: {
      nombreDependencia: 'Sindicatura Municipal',
    },
    where: {
      idDependencia: 12,
    },
  })

  const depMuRB = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Mejoramiento Urbano',
    },
    update: {
      nombreDependencia: 'Mejoramiento Urbano',
    },
    where: {
      idDependencia: 13,
    },
  })

  const depCons = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Conservación de Inmuebles',
    },
    update: {
      nombreDependencia: 'Conservación de Inmuebles',
    },
    where: {
      idDependencia: 14,
    },
  })

  const depInnov = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Innovación gubernamental',
    },
    update: {
      nombreDependencia: 'Innovación gubernamental',
    },
    where: {
      idDependencia: 15,
    },
  })

  const depBomberos = await prisma.dependencias.upsert({
    create: {
      nombreDependencia: 'Protección civil y bomberos',
    },
    update: {
      nombreDependencia: 'Protección civil y bomberos',
    },
    where: {
      idDependencia: 16,
    },
  })

 

    const salt = await bcrypt.genSalt(10);
    const pass = "Pass123.";
    const password = await bcrypt.hash(pass,salt);
    const newPass = password;
    const usuarios  = await prisma.usuarios.upsert( {
        create: {
          nombre: 'Administrador',
          apellido: 'Innovación',
          telefono: '3334556456',
          correo: 'admin@admin.com',
          contrasena:newPass,
          noEmpleado: 1,
          rol: {
            connect: { idRol: 1 },
          },
          dependenciaUsuario: {
            connect: { idDependencia:15 },
          },
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJsdWlzQGdtYWlsLmNvbSIsImlhdCI6MTY2MjU2MzM4NCwiZXhwIjoxNjYyNTcwNTg0fQ.atQaLq7pjXULP4VRcntE1MzQBLqu4dRkvZpVIxZV04F"
        },
        update: {
          nombre: 'Administrador',
          apellido: 'Innovación',
          telefono: '3334556456',
          correo: 'admin@admin.com',
          contrasena:newPass,
          noEmpleado: 1,
          rol: {
            connect: { idRol: 1 },
          },
          dependenciaUsuario: {
            connect: { idDependencia:15 },
          },
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJsdWlzQGdtYWlsLmNvbSIsImlhdCI6MTY2MjU2MzM4NCwiZXhwIjoxNjYyNTcwNTg0fQ.atQaLq7pjXULP4VRcntE1MzQBLqu4dRkvZpVIxZV04F"
        },
        where: {
          idUsuarios: 1,
        }
      });
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
