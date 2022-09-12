import express from 'express';
import {getPCivil, createFormPCivil, getFormPCivilById, getPcivilTotal } from '../controllers/formularioPCivil.js';
const router = express.Router();

//Las rutas aqui inician con /pcivil
router.get('/', getPCivil);
router.get('/total', getPcivilTotal);
router.post('/', createFormPCivil);
router.get('/:id', getFormPCivilById);

export default router;