import supertest from 'supertest'
import app from '../src/app.js'

let id
let token

beforeAll(async () => {
    const data = { email: 'pablitopencas@test.com', password: '123456'} 
    const res = await supertest(app).post('/users/login').send(data)
    token = res.body.token
})

test('GET /cities - Obtener todas las ciudades', async () => {
    const res = await supertest(app).get('/cities')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
})

test('POST /cities - Crear una nueva ciudad', async () => {
    const city = {
        name: 'Guadalajara',
        country: 'Mexico',
        countryId: 'MX'
    }
    const res = await supertest(app).post('/cities').send(city).set('Authorization', `Bearer ${token}`)
    
    id = res.body.id
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe(city.name)
    console.log('City: ', res.body)
});


test('PUT /cities/:id - Actualizar una ciudad', async () => {
    const newCity = {
        name: 'Cartagena',
        country: 'Colombia',
        countryId: 'CO'
    }
    const res = await supertest(app).put(`/cities/${id}`).send(newCity).set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.name).toBe(newCity.name)
    console.log('New City: ', res.body)
});

test('DELETE /cities/:id - Eliminar una ciudad por ID', async () => {
    const res = await supertest(app).delete(`/cities/${id}`).set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
});