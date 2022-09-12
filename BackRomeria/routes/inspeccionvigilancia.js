import express from 'express';
import {getInspeccionvig, createFormInspeccionvig, getFormInspeccionvigById, getInspaccionTotal } from '../controllers/formulariosInspeccionvig.js';
const router = express.Router();

//Las rutas aqui inician con /inspeccionvig
router.get('/', getInspeccionvig);
router.get('/total', getInspaccionTotal);
router.post('/', createFormInspeccionvig);
router.get('/:id', getFormInspeccionvigById);

export default router;
