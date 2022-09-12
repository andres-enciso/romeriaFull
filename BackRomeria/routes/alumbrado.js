import express from 'express';
import {createFormAlumbrado, getAlumbrado, getFormAlumbradoById, getAlumbradoTotal } from '../controllers/formulariosAlumbrado.js';
const router = express.Router();

//Las rutas aqui inician con /dif
router.get('/', getAlumbrado);
router.get('/total', getAlumbradoTotal);
router.post('/', createFormAlumbrado);
router.get('/:id', getFormAlumbradoById);

export default router;
