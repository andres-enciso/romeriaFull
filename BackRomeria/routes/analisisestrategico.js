import express from 'express';
import {createFormAnalisis, getAnalisis, getFormAnalisispById,getAnalisisTotal } from '../controllers/formulariosanalisisestrategico.js';
const router = express.Router();

//Las rutas aqui inician con /dif
router.get('/', getAnalisis);
router.get('/total', getAnalisisTotal);
router.post('/', createFormAnalisis);
router.get('/:id', getFormAnalisispById);

export default router;
