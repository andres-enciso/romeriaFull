import express from 'express';
import {getRecaudadora, createFormRecaudadora, getFormRecaudadoraById, getRecaTotal } from '../controllers/formulariosRecaudadora.js';
const router = express.Router();

//Las rutas aqui inician con /inspeccionvig
router.get('/', getRecaudadora);
router.get('/total', getRecaTotal);
router.post('/', createFormRecaudadora);
router.get('/:id', getFormRecaudadoraById);

export default router;
