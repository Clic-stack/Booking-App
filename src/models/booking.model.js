import db from '../db/connect.js'
import { DataTypes } from 'sequelize'
import User from './user.model.js'
import Hotel from './hotel.model.js'

export const Booking = db.define('booking', {
    checkIn: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    checkOut: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

User.hasMany(Booking)
Booking.belongsTo(User)

Hotel.hasMany(Booking)
Booking.belongsTo(Hotel)

export default Booking