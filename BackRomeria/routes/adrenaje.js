import express from 'express';
import {getADrenaje, createFormADrenaje, getFormADrenajeById, getAdrenajeTotal } from '../controllers/formulariosADrenaje.js';
const router = express.Router();

//Las rutas aqui inician con /dif
router.get('/', getADrenaje);
router.post('/', createFormADrenaje);
router.get('/total', getAdrenajeTotal);
router.get('/:id', getFormADrenajeById);

export default router;
