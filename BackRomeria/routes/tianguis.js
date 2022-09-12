import express from 'express';
import {createFormTianguis, getTianguis, getFormTianguisById, getTianguisTotal } from '../controllers/formulariosTianguis.js';
const router = express.Router();

//Las rutas aqui inician con /tianguis
router.get('/', getTianguis);
router.get('/total', getTianguisTotal);
router.post('/', createFormTianguis);
router.get('/:id', getFormTianguisById);

export default router;
