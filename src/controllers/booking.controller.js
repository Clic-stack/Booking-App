import { catchError } from '../middlewares/catchError.js'
import Booking from '../models/booking.model.js'
import Hotel from '../models/hotel.model.js'
import User from '../models/user.model.js'

export const getAll = catchError(async(req, res) => {
    const { userId, hotelId } = req.query
    const where = {}
    if(userId) where.userId = userId
    if(hotelId) where.hotelId = hotelId
    const results = await Booking.findAll({ 
        include: [ { model: Hotel }, { model: User, attributes: { exclude: ['password'] } } ],
        where
    })

    const total = await Booking.count({ where }) 
    return res.json({total, results})
})

export const create = catchError(async(req, res) => {
    const { checkIn, checkOut, hotelId } = req.body || {}
    const { user } = req.user
    const userId = user.id
    const result = await Booking.create({ checkIn, checkOut, hotelId, userId })
    return res.status(201).json(result)
})

export const remove = catchError(async(req, res) => {
    const { id } = req.params
    await Booking.destroy({ where: {id} })
    return res.sendStatus(204)
})

export const update = catchError(async(req, res) => {
    const { id } = req.params
    
    // Mejora implementada: Actualizar solo los campos permitidos: checkIn y checkOut
    const { checkIn, checkOut } = req.body || {}
    const fieldsToUpdate = {}
    if (checkIn !== undefined) fieldsToUpdate.checkIn = checkIn
    if (checkOut !== undefined) fieldsToUpdate.checkOut = checkOut

    const result = await Booking.update(
        fieldsToUpdate,
        { where: {id}, returning: true }
    )
    if(result[0] === 0) return res.sendStatus(404)
    return res.json(result[1][0])
})