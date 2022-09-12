import express from 'express';
import {createFormInnovacion, getInnovacion, getFormInnovacionById,getInovaccionTotal } from '../controllers/formulariosInnovacion.js';
const router = express.Router();

//Las rutas aqui inician con /innovacion
router.get('/', getInnovacion);
router.get('/total', getInovaccionTotal);
router.post('/', createFormInnovacion);
router.get('/:id', getFormInnovacionById);

export default router;
