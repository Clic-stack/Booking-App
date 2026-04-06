import { getAll, create, remove, update, login } from '../controllers/user.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'
import { apiLimiter } from '../middlewares/rateLimit.js';

const router = Router(apiLimiter)

router.route('/users')
    .get(auth, getAll)
    .post(create)

router.route('/users/login')
    .post(login)

router.route('/users/:id')
    .delete(auth,remove)
    .put(auth, update)

export default router