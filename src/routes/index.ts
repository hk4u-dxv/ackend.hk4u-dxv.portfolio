import { Router } from 'express';
import { STATUS_MESSAGES } from '@utils/constants';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: STATUS_MESSAGES.API_ACTIVE });
});

export default router; 