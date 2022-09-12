import express from 'express';
import {createFormsalud, getSalud, getFormSaludById, getSaludTotal} from '../controllers/formularioSalud.js';
const router = express.Router();

//Las rutas aqui inician con /formularios
router.get('/', getSalud);
router.get('/saludTotal', getSaludTotal);
router.post('/', createFormsalud);
router.get('/:id', getFormSaludById);

export default router;