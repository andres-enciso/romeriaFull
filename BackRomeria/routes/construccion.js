import express from 'express';
import {getConstruccion, getFormConstruccionById, createFormConstruccion, getConstrTotal } from '../controllers/formularioConstruccion.js';
const router = express.Router();

//Las rutas aqui inician con /construccion
router.get('/', getConstruccion);
router.post('/', createFormConstruccion);
router.get('/total', getConstrTotal);
router.get('/:id', getFormConstruccionById);

export default router;
