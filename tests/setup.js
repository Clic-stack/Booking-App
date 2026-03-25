import sequelize from '../src/db/connect.js'

beforeAll(async () => {
    try {
        // Usamos alter: true para que la DB en Neon siempre coincida con tus modelos
        await sequelize.sync({ alter: true, force: false })
        console.log('Database synced successfully for testing.')
    } catch (error) {
        console.error('Unable to sync database:', error)
        process.exit(1) // Detiene los tests si no hay conexión
    }
}, 30000) 

afterAll(async () => {
    await sequelize.close()
})