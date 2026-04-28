import supertest from 'supertest'
import app from '../src/app.js'

let id
let token
const EXISTING_HOTEL_ID = 1 

beforeAll(async () => {
    const data = { email: 'pablitopencas@test.com', password: '123456'} 
    const res = await supertest(app).post('/users/login').send(data)
    
    if (res.status !== 200) {
        console.error('❌ Error de Login en Review Tests:', res.body)
    }
    
    token = res.body.token
})

test('GET /reviews - Obtener todos los reviews', async () => {
    const res = await supertest(app).get('/reviews')
    expect(res.status).toBe(200)
    
    // Adaptación por si devuelve { results: [] } o directamente el Array
    const reviews = res.body.results || res.body
    expect(reviews).toBeInstanceOf(Array)
})

test('POST /reviews - Crear una nueva review', async () => {
    const review = {
        rating: 3,
        comment: 'Buen hotel, pero el servicio de limpieza puede mejorar.',
        hotelId: EXISTING_HOTEL_ID
    }
    const res = await supertest(app)
        .post('/reviews')
        .send(review)
        .set('Authorization', `Bearer ${token}`)
    
    id = res.body.id
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.comment).toBe(review.comment)
    expect(res.body.rating).toBe(review.rating)
});

test('PUT /reviews/:id - Actualizar una review', async () => {
    const updatedReview = {
        rating: 5,
        comment: 'Después de mi última visita, noté mejoras significativas...',
        hotelId: EXISTING_HOTEL_ID
    }

    const res = await supertest(app)
        .put(`/reviews/${id}`)
        .send(updatedReview)
        .set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.comment).toBe(updatedReview.comment)
    expect(res.body.rating).toBe(updatedReview.rating)
});

test('DELETE /reviews/:id - Eliminar una review por ID', async () => {
    const res = await supertest(app)
        .delete(`/reviews/${id}`)
        .set('Authorization', `Bearer ${token}`)
    
    expect(res.status).toBe(204) // 👈 Aquí la DB queda limpia de nuevo
});