import { Router } from 'express';
import { createSinglePurchaseOrder, createPremiumSubscription, handleCashfreeWebhook } from '../controllers/payment.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/create-order', createSinglePurchaseOrder);

router.post('/create-subscription', verifyJWT, createPremiumSubscription);

router.post('/webhook', handleCashfreeWebhook);

export default router;