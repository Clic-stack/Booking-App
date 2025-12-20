import { getAll, create, remove, update, login } from '../controllers/user.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'

const router = Router()

router.route('/users')
    .get(auth, getAll)
    .post(create)

router.route('/users/login')
    .post(login)

router.route('/users/:id')
    .delete(auth,remove)
    .put(auth, update)

export default router