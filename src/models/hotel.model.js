import db from '../db/connect.js'
import { DataTypes } from 'sequelize'
import City from './city.model.js'

export const Hotel = db.define('hotel', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lat: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false,
        validate: {
            min: -90,
            max: 90
        }
    },
    lon: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false,
        validate: {
            min: -180,
            max: 180
        }

    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

City.hasMany(Hotel)
Hotel.belongsTo(City)

export default Hotel