import { getAll, create, remove, update } from '../controllers/review.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'
import { apiLimiter } from '../middlewares/rateLimit.js';

const router = Router()

router.route('/reviews')
  .get(apiLimiter, getAll)
  .post(auth, apiLimiter, create); // Protegemos el POST (operación costosa)

router.route('/reviews/:id')
  .delete(auth, apiLimiter, remove) // Protegemos el DELETE
  .put(auth, apiLimiter, update);   // Protegemos el PUT

export default router;