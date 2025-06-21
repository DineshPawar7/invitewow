import { Router } from 'express';
import { getAllTemplates, getTemplateById, seedTemplates } from '../controllers/template.controller.js';

const router = Router();

router.get('/', getAllTemplates);
router.get('/:id', getTemplateById);


router.post('/seed', seedTemplates);

export default router;