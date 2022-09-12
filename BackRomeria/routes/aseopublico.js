import express from 'express';
import {createFormAseop, getAseop, getFormAseopById,getAseoTotal } from '../controllers/formulariosAseop.js';
const router = express.Router();

//Las rutas aqui inician con /dif
router.get('/', getAseop);
router.get('/total', getAseoTotal);
router.post('/', createFormAseop);
router.get('/:id', getFormAseopById);

export default router;
