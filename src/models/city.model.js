import db from '../db/connect.js'
import { DataTypes } from 'sequelize'

export const City = db.define('city', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countryId: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default City