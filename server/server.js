import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './src/middlewares/error.middleware.js';

import authRoutes from './src/routes/auth.routes.js';
import templateRoutes from './src/routes/template.routes.js';
import paymentRoutes from './src/routes/payment.routes.js';
import downloadRoutes from './src/routes/download.routes.js';

dotenv.config();



const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/templates', templateRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use('/api/v1/download', downloadRoutes);

app.use(globalErrorHandler);

app.get('/', (req, res) => {
    res.send('InviteWow Backend is running!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});