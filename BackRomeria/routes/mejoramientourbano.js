import express from 'express';
import {getMUrbano, createFormMUrbano, getFormMUrbanoById, getMurbanoTotal } from '../controllers/formulariosMUrbano.js';
const router = express.Router();

//Las rutas aqui inician con /inspeccionvig
router.get('/', getMUrbano);
router.get('/total', getMurbanoTotal);
router.post('/', createFormMUrbano);
router.get('/:id', getFormMUrbanoById);

export default router;
