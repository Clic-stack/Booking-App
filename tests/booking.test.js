import supertest from 'supertest'
import app from '../src/app.js'

let id
let token

beforeAll(async () => {
    const data = { email: 'pablitopencas@test.com', password: '123456'} 
    const res = await supertest(app).post('/users/login').send(data)
    token = res.body.token
})

test('GET /bookings - Obtener todas las reservas', async () => {
    const res = await supertest(app).get('/bookings').set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200)
    expect(res.body.results).toBeInstanceOf(Array)
    expect(typeof res.body.total).toBe('number')
    console.log(res.body)
})

test('POST /bookings - Crear una nueva reserva', async () => {
    const booking = {
        checkIn: '2025-12-19',
        checkOut: '2025-12-23',
        hotelId: 1
    }
    const res = await supertest(app).post('/bookings').send(booking).set('Authorization', `Bearer ${token}`)
    
    id = res.body.id
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.checkIn).toBe(booking.checkIn)
    expect(res.body.checkOut).toBe(booking.checkOut)
    console.log('Booking: ', res.body)
});


test('PUT /bookings/:id - Actualizar una reserva', async () => {
    const updatedBooking = {
        checkIn: '2025-12-20',
        checkOut: '2025-12-25',
        hotelId: 1
    }

    const res = await supertest(app).put(`/bookings/${id}`).send(updatedBooking).set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.checkIn).toBe(updatedBooking.checkIn)
    expect(res.body.checkOut).toBe(updatedBooking.checkOut)
    expect(res.body.hotelId).toBe(updatedBooking.hotelId)
    console.log('Updated Booking: ', res.body)
});

test('DELETE /bookings/:id - Eliminar una reserva por ID', async () => {
    const res = await supertest(app).delete(`/bookings/${id}`).set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
});