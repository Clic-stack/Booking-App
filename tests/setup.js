import sequelize from '../src/db/connect.js'

beforeAll(async () => {
    await sequelize.sync({ alter: false, force: false })
})

afterAll(async () => {
    await sequelize.close()
}) 