
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const login = async (req, res) => {

    try {
        // Get user input
        const { correo, contrasena } = req.body;
    
        // Validate user input
        if (!(correo && contrasena)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database

    //     const user = await prisma.usuarios.findUnique({ correo: req.body.correo });
    // if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });
    
    const result = await prisma.usuarios.findUnique({
      where: {
        correo: correo
      },
    })
    // const validPassword = await bcrypt.compare(req.body.contrasena, user.contrasena);
    if (result && (await bcrypt.compare(contrasena, result.contrasena))) {
          // Create token
          const token = jwt.sign(
            { idUsuarios: result._id, correo },
            process.env.TOKEN_KEY
          );
    
          // save user token
          result.token = token;
    
          // user
          res.status(200).json({data: result});
        }else{
          res.status(400).send("Invalid Credentials");
        }
        
      } catch (err) {
        console.log(err);
      }
    
  };
  