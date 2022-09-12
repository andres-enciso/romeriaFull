import express from 'express';
import {createFormSegPublica, getSegPublica, getFormSegPublicaById, getSegpTotal } from '../controllers/formulariosSegPublica.js';
const router = express.Router();

//Las rutas aqui inician con /segPublica
router.get('/', getSegPublica);
router.get('/total', getSegpTotal);
router.post('/', createFormSegPublica);
router.get('/:id', getFormSegPublicaById);

export default router;
