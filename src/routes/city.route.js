import { getAll, create, remove, update } from '../controllers/city.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'
import { apiLimiter } from '../middlewares/rateLimit.js';

const router = Router(apiLimiter)
router.use(apiLimiter);

router.route('/cities')
    .get(getAll)
    .post(auth, create)

router.route('/cities/:id')
    .delete(auth, remove)
    .put(auth, update)

export default router