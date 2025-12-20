import { Router } from 'express'
import userRouter from './user.route.js'
import cityRouter from './city.route.js'
import hotelRouter from './hotel.route.js'
import imageRouter from './image.route.js'
import reviewRouter from './review.route.js'
import bookingRouter from './booking.route.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})

router.use(userRouter)
router.use(cityRouter)
router.use(hotelRouter)
router.use(imageRouter)
router.use(reviewRouter)
router.use(bookingRouter)

export default router