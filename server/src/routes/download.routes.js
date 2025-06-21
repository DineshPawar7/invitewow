import { Router } from 'express';
import { downloadForPremiumUser, downloadForSinglePurchase } from '../controllers/download.controller.js';
import { verifyJWT, isPremium } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/premium/:templateId', verifyJWT, isPremium, downloadForPremiumUser);

router.get('/secure/:token', downloadForSinglePurchase);

export default router;