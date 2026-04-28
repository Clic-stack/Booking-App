import sequelize from '../src/db/connect.js';

beforeAll(async () => {
    try {
        // alter: true sincroniza tablas sin borrar datos
        await sequelize.sync({ alter: true, force: false });
        
        // OPCIONAL: Aquí se podría insertar un usuario de prueba con código
        // si los tests de login fallan es porque la tabla está vacía.
        
        console.log('✅ DB conectada y sincronizada para tests');
    } catch (error) {
        console.error('❌ Error en el setup de la DB:', error);
        process.exit(1);
    }
}, 30000); // Timeout largo para la conexión inicial

afterAll(async () => {
    await sequelize.close();
});