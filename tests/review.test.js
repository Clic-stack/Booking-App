import supertest from 'supertest'
import app from '../src/app.js'

let id
let token

beforeAll(async () => {
    const data = { email: 'pablitopencas@test.com', password: '123456'} 
    const res = await supertest(app).post('/users/login').send(data)
    token = res.body.token
})

test('GET /reviews - Obtener todos los reviews', async () => {
    const res = await supertest(app).get('/reviews')
    expect(res.status).toBe(200)
    expect(res.body.results).toBeInstanceOf(Array)
    expect(typeof res.body.total).toBe('number')
    console.log(res.body)
})

test('POST /reviews - Crear una nueva review', async () => {
    const review = {
        rating: 3,
        comment: 'Buen hotel, pero el servicio de limpieza puede mejorar.',
        hotelId: 1
    }
    const res = await supertest(app).post('/reviews').send(review).set('Authorization', `Bearer ${token}`)
    
    id = res.body.id
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.comment).toBe(review.comment)
    expect(res.body.rating).toBe(review.rating)
    console.log('Review: ', res.body)
});


test('PUT /reviews/:id - Actualizar una review', async () => {
    const updatedReview = {
        rating: 5,
        comment: 'Después de mi última visita, noté mejoras significativas en la limpieza y el servicio al cliente. El personal fue más atento y las habitaciones estaban impecables. Definitivamente recomendaría este hotel a otros viajeros.',
        hotelId: 1
    }

    const res = await supertest(app).put(`/reviews/${id}`).send(updatedReview).set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.comment).toBe(updatedReview.comment)
    expect(res.body.rating).toBe(updatedReview.rating)
    expect(res.body.hotelId).toBe(updatedReview.hotelId)
    console.log('Updated Review: ', res.body)
});

test('DELETE /reviews/:id - Eliminar una review por ID', async () => {
    const res = await supertest(app).delete(`/reviews/${id}`).set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
});