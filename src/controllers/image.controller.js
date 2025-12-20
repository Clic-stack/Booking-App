import { catchError } from '../middlewares/catchError.js'
import Hotel from '../models/hotel.model.js'
import Image from '../models/Image.model.js'
import { uploadBufferToCloudinary, deleteFromCloudinary } from '../config/cloudinary.js'

export const getAll = catchError(async(req, res) => {
    const results = await Image.findAll({ include: Hotel })
    return res.json(results)
})

export const create = catchError(async(req, res) => {
    const { hotelId } = req.body
    const { url, public_id } = await uploadBufferToCloudinary(req.file.buffer, 'hotelImages')
    console.log(public_id)
    const image = await Image.create({ url, hotelId })
    return res.status(201).json(image)
})

export const remove = catchError(async(req, res) => {
    const { id } = req.params
    const image = await Image.findByPk(id)
    if (!image) return res.sendStatus(404)
    await deleteFromCloudinary(image.url)
    await image.destroy()
    return res.sendStatus(204)
})
