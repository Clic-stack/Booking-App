import supertest from 'supertest'
import app from '../src/app.js'

let id
let token

test('POST /users - Crear un nuevo usuario', async () => {
    const newUser = {
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'jhondoe@test.com',
        password: '123456',
        gender: 'MALE'
    }
    const res = await supertest(app).post('/users').send(newUser)
    
    id = res.body.id
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe(newUser.name)
    expect(res.body).not.toHaveProperty('password')
    console.log('New User:', res.body)
});

test('POST /users/login - Logear un usuario ', async () => {
    const credentials = {
        email: 'jhondoe@test.com',
        password: '123456'
    }
    const res = await supertest(app).post('/users/login').send(credentials)
    token = res.body.token
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('user')
    expect(res.body).toHaveProperty('token')
    console.log('Login: ', res.body)
});

test('GET /users - Obtener todos los usuarios', async () => {
    const res = await supertest(app).get('/users').set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
})

test('PUT /users/:id - Actualizar un usuario', async () => {
    const updatedUser = {
        firstName: 'Jhon',
        lastName: 'Diaz',
        email: 'jhondiaz@test.com',
        password: '123456',
        gender: 'MALE'
    }
    const res = await supertest(app).put(`/users/${id}`).send(updatedUser).set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.firstName).toBe(updatedUser.firstName)
    console.log('Updated User:', res.body)
});

test('DELETE /users/:id - Eliminar un usuario por ID', async () => {
    const res = await supertest(app).delete(`/users/${id}`).set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
});