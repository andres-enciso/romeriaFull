

import express from 'express';
import { login } from '../controllers/login.js';
const router = express.Router();

//Las rutas aqui inician con /login
router.post('/', login);

export default router;

