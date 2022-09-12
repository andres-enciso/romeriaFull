
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        // Get user input
        const { nombre, apellido, correo, contrasena,telefono,noEmpleado,rolUsuario,tipodependencia} = req.body;
        const validCorreo = await prisma.usuarios.findUnique({
          where: {
            correo: correo,
          },
        })
    
        if (!(correo && contrasena && nombre && apellido && telefono && noEmpleado && rolUsuario && tipodependencia)) {
          res.status(400).send("All input is required");
        } else if (validCorreo) {
          res.status(400).send("El correo ya existe.");
        }

       
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.contrasena, salt);
        const user = await prisma.usuarios.create({

            data: {
              nombre,
              apellido,
              telefono,
              correo,
              contrasena:password,
              noEmpleado,
              rol: {
                connect: { idRol: Number(rolUsuario) },
              },
              dependenciaUsuario: {
                connect: { idDependencia: Number(tipodependencia) },
              },
            },
          });
    
        // Create token
        const token = jwt.sign(
          { idUsuarios: user._id, correo },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;
    
        // return new user
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
      }
      // Our register logic ends here
  };
  