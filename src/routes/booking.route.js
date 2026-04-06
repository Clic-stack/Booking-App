import { getAll, create, remove, update } from '../controllers/booking.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'
import { apiLimiter } from '../middlewares/rateLimit.js';

const router = Router(apiLimiter)
router.use(apiLimiter);

router.route('/bookings')
    .get(auth, getAll)
    .post(auth, create)

router.route('/bookings/:id')
    .delete(auth, remove)
    .put(auth, update)

export default router