import express from 'express';
import {createSindicatura, getSindicatura, getSindicaturaById,getSindicaturaTotal } from '../controllers/formulariosSindicatura.js';
const router = express.Router();

//Las rutas aqui inician con /formularios
router.get('/', getSindicatura);
router.get('/total', getSindicaturaTotal);
router.post('/', createSindicatura);
router.get('/:id', getSindicaturaById);

export default router;