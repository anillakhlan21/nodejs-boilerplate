import { Router } from 'express';

// Import feature-specific routes
import {authRoutes, exampleRoutes } from '../../modules';

const router = Router();

// Base routes
router.use('/example', exampleRoutes);
router.use('/auth', authRoutes);

// Health check
router.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'API is healthy ✅' });
});

export default router;