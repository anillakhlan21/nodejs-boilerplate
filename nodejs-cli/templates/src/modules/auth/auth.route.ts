import express from 'express';
import { loginSchema, registerSchema } from './auth.schema';
import validateMiddleware from '../../middlewares/validate.middleware';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/register', validateMiddleware(registerSchema), AuthController.register);
router.post('/login', validateMiddleware(loginSchema), AuthController.login);
router.get('/me', AuthController.getProfile);

export default router;