import { getAll, create, getOne, remove, update } from '../controllers/hotel.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'
import { apiLimiter } from '../middlewares/rateLimit.js';

const router = Router()
router.use(apiLimiter);

router.route('/hotels')
    .get(getAll)
    .post(auth, create)

router.route('/hotels/:id')
    .get(getOne)
    .delete(auth, remove)
    .put(auth, update)

export default router