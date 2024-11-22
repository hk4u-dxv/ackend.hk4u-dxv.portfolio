import { Router, type IRouter } from 'express';
import { projectRoutes } from './projects.routes';

const router: IRouter = Router();

// Rutas de proyectos
router.use('/projects', projectRoutes);

export default router; 