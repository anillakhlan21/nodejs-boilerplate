import { Router } from 'express';
import { validateRequest } from '../../middlewares/validate.middleware';
import exampleSchema from './example.schema';


const router = Router();

router.post('/', validateRequest(exampleSchema, ))

export default router;