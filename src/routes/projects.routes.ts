import { Router, type IRouter } from 'express';

const router: IRouter = Router();

// GET /api/projects
router.get('/', (_req, res) => {
  res.json({
    message: 'Projects endpoint',
    projects: []
  });
});

export const projectRoutes = router; 