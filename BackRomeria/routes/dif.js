import express from 'express';
import {createFormDif, getDif, getFormDifById, getDifTotal } from '../controllers/formulariosDif.js';
const router = express.Router();

//Las rutas aqui inician con /dif
router.get('/', getDif);
router.post('/', createFormDif);
router.get('/total', getDifTotal);
router.get('/:id', getFormDifById);

export default router;
