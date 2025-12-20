import { catchError } from '../middlewares/catchError.js'
import Hotel from '../models/hotel.model.js'
import Review from '../models/review.model.js'
import User from '../models/user.model.js'

export const getAll = catchError(async(req, res) => {
    const { userId, hotelId, limit = 20, offset = 0 } = req.query
    const where = {}
    if(userId) where.userId = userId
    if(hotelId) where.hotelId = hotelId
    const results = await Review.findAll({ 
        limit,
        offset,
        include: [{model: Hotel}, { model: User, attributes: { exclude: ['password'] } }], 
        where 
    })

    const total = await Review.count({ where })
    return res.json({ total, results })
})

export const create = catchError(async(req, res) => {
    const { rating, comment, hotelId } = req.body || {}
    const { user } = req.user
    const userId = user.id
    const result = await Review.create({ rating, comment, hotelId, userId })
    return res.status(201).json(result)
})

export const remove = catchError(async(req, res) => {
    const { id } = req.params
    await Review.destroy({ where: {id} })
    return res.sendStatus(204)
})

export const update = catchError(async(req, res) => {
    const { id } = req.params
    
    // Mejora implementada: Actualizar solo los campos permitidos: rating y comment
    const { rating, comment } = req.body || {}
    const fieldsToUpdate = {}
    if (rating !== undefined) fieldsToUpdate.rating = rating
    if (comment !== undefined) fieldsToUpdate.comment = comment

    const result = await Review.update(
        fieldsToUpdate,
        { where: {id}, returning: true }
    )
    if(result[0] === 0) return res.sendStatus(404)
    return res.json(result[1][0])
})
