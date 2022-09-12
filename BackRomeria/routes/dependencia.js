import express from 'express';
import {createDependencia, deleteDependencia, getDependencia, getDependenciaById, updateDependencia } from '../controllers/dependencias.js';
const router = express.Router();


//Las rutas aqui inician con /dependencia

router.get('/', getDependencia);

router.post('/', createDependencia);

router.get('/:id', getDependenciaById);

router.delete('/:id', deleteDependencia);

router.put('/:id', updateDependencia);
export default router;