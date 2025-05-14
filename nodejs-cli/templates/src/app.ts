import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error.middleware';
import routes from './routes';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error Middleware
app.use(errorMiddleware);

export default app;