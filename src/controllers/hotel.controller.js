import { Op } from 'sequelize'
import { catchError } from '../middlewares/catchError.js'
import City from '../models/city.model.js'
import Hotel from '../models/hotel.model.js'
import Image from '../models/Image.model.js'
import Review from '../models/review.model.js'

export const getAll = catchError(async(req, res) => {
    const {name, cityId} = req.query
    const where = {}
    if(name) {
        where.name = { [Op.iLike]: `%${name}%`}
    }
    if(cityId) {
        where.cityId = cityId
    }
    const hotels = await Hotel.findAll({include: [City, Image, Review], where})

    hotels.forEach(h => {
        const reviews = h.reviews
        const totalRates = reviews.reduce((acc, rev) => acc += rev.rating, 0)
        const average = reviews.length > 0 ? totalRates / reviews.length : 0
        h.setDataValue('average', average)
        delete h.dataValues.reviews
    })
    return res.json(hotels)
})

export const create = catchError(async(req, res) => {
    const result = await Hotel.create(req.body)
    return res.status(201).json(result)
})

export const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result = await Hotel.findByPk(id, { include: City })
    if(!result) return res.sendStatus(404)
    return res.json(result)
})

export const remove = catchError(async(req, res) => {
    const { id } = req.params
    await Hotel.destroy({ where: {id} })
    return res.sendStatus(204)
})

export const update = catchError(async(req, res) => {
    const { id } = req.params
    const result = await Hotel.update(
        req.body,
        { where: {id}, returning: true }
    )
    if(result[0] === 0) return res.sendStatus(404)
    return res.json(result[1][0])
})
