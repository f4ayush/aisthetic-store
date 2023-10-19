import { Router } from 'express';
import store from './store.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = Router();

router.use('/store',checkAuth, store);

export default router;
