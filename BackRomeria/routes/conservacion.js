import express from 'express';
import {getconservacion, createConservacion, getFormConservacionById, getConservacionTotal } from '../controllers/formulariosgetConservacion.js';
const router = express.Router();

//Las rutas aqui inician con /conservacion
router.get('/', getconservacion);
router.get('/total', getConservacionTotal);
router.post('/', createConservacion);
router.get('/:id', getFormConservacionById);

export default router;
