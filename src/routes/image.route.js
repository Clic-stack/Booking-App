import { getAll, create, remove } from '../controllers/image.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'
import upload from '../middlewares/upload.js'

const router = Router()

router.route('/images')
    .get(auth, getAll)
    .post(auth, upload.single('image'), create)

router.route('/images/:id')
    .delete(auth, remove)
    
export default router