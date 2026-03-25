import supertest from 'supertest'
import app from '../src/app.js'

let id
let token
// 💡 Asegúrate de que este ID de ciudad exista en tu base de datos de Neon
const EXISTING_CITY_ID = 2 

beforeAll(async () => {
    const data = { email: 'pablitopencas@test.com', password: '123456'} 
    const res = await supertest(app).post('/users/login').send(data)
    
    if (res.status !== 200) {
        console.error('❌ Error de Login en Hotel Tests:', res.body)
    }
    
    token = res.body.token
})

test('GET /hotels - Obtener todos los hoteles', async () => {
    const res = await supertest(app).get('/hotels')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
})

test('POST /hotels - Crear un nuevo hotel', async () => {
    const hotelName = `Hotel Aurora Azul ${Date.now()}`
    const hotel = {
        name: hotelName,
        description: 'Ubicado en el corazón de la ciudad...',
        price: 189.99,
        address: 'Av. de la Innovación#2456, Guadalajara',
        lat: 20.6597,
        lon: -103.3496,
        cityId: EXISTING_CITY_ID
    }
    const res = await supertest(app)
        .post('/hotels')
        .send(hotel)
        .set('Authorization', `Bearer ${token}`)
    
    id = res.body.id
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe(hotel.name)
    // 💡 Convertimos a número por si la DB devuelve un string
    expect(Number(res.body.price)).toBe(hotel.price)
});

test('PUT /hotels/:id - Actualizar un hotel', async () => {
    const updatedName = `Gran Hotel Sol y Mar ${Date.now()}`
    const newHotel = {
        name: updatedName,
        description: 'Este hotel ofrece una experiencia única...',
        price: 249.50,
        address: 'Calle Primavera#1287, Zapopan',
        lat: 19.4326,
        lon: -99.1332,
        cityId: EXISTING_CITY_ID
    }
    const res = await supertest(app)
        .put(`/hotels/${id}`)
        .send(newHotel)
        .set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.name).toBe(newHotel.name)
    expect(Number(res.body.price)).toBe(newHotel.price)
});

test('GET /hotels/:id - Obtener un hotel por ID', async() => {
    const res = await supertest(app).get(`/hotels/${id}`)
    expect(res.status).toBe(200)
    expect(res.body.id).toBe(id)
})

test('DELETE /hotels/:id - Eliminar un hotel por ID', async () => {
    const res = await supertest(app)
        .delete(`/hotels/${id}`)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
});

/*import supertest from 'supertest'
import app from '../src/app.js'

let id
let token

beforeAll(async () => {
    const data = { email: 'pablitopencas@test.com', password: '123456'} 
    const res = await supertest(app).post('/users/login').send(data)
    token = res.body.token
})

test('GET /hotels - Obtener todos los hoteles', async () => {
    const res = await supertest(app).get('/hotels')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    console.log(res.body)
})

test('POST /hotels - Crear un nuevo hotel', async () => {
    const hotel = {
        name: 'Hotel Aurora Azul',
        description: 'Ubicado en el corazón de la ciudad, este hotel combina elegancia moderna con un ambiente acogedor. Sus habitaciones luminosas ofrecen vistas panorámicas, mientras que el restaurante interno deleita con sabores locales e internacionales. Perfecto tanto para viajes de negocios como para escapadas de descanso, con fácil acceso a atracciones turísticas y transporte.',
        price: 189.99,
        address: 'Av. de la Innovación#2456, Col. Las Estrellas, Guadalajara, Jalisco, C.P. 44100, México',
        lat: 20.6597,
        lon: -103.3496,
        cityId: 2
    }
    const res = await supertest(app).post('/hotels').send(hotel).set('Authorization', `Bearer ${token}`)
    
    id = res.body.id
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe(hotel.name)
    console.log('Hotel: ', res.body)
});


test('PUT /hotels/:id - Actualizar un hotel', async () => {
    const newHotel = {
        name: 'Gran Hotel Sol y Mar',
        description: 'Este hotel ofrece una experiencia única con habitaciones modernas y cómodas, diseñadas para el descanso y la productividad. Los huéspedes disfrutan de un ambiente tranquilo, áreas comunes elegantes y un servicio atento. Su ubicación estratégica lo convierte en el punto ideal para explorar la ciudad, tanto en viajes de negocios como de placer.',
        price: 249.50,
        address: 'Calle Primavera#1287Col. Jardines del Sol Zapopan, Jalisco, C.P. 45050, México',
        lat: 19.4326,
        lon: -99.1332,
        cityId: 2
    }
    const res = await supertest(app).put(`/hotels/${id}`).send(newHotel).set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.name).toBe(newHotel.name)
    console.log('New Hotel: ', res.body)
});

test('GET /hotels/:id - Obtener un hotel por ID', async() => {
    const res = await supertest(app).get(`/hotels/${id}`)
    expect(res.status).toBe(200)
})

test('DELETE /hotels/:id - Eliminar un hotel por ID', async () => {
    const res = await supertest(app).delete(`/hotels/${id}`).set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
});*/