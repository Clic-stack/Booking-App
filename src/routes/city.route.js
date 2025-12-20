import { getAll, create, remove, update } from '../controllers/city.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'

const router = Router()

router.route('/cities')
    .get(getAll)
    .post(auth, create)

router.route('/cities/:id')
    .delete(auth, remove)
    .put(auth, update)

export default router