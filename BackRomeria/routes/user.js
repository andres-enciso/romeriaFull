import express from 'express';
import {createUser, deleteUser, getUsers, getUserById, updateUser} from '../controllers/users.js';
const router = express.Router();


//Las rutas aqui inician con /users

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.put('/delete/:id', deleteUser);

router.put('/:id', updateUser);
export default router;