## <p align="center">🏨 Booking App</p> <br/> <p align="center">[![SecOps: CodeQL Analysis](https://img.shields.io/badge/Analysis-CodeQL--SecOps-F5F5F5?style=for-the-badge&logo=github&logoColor=black&labelColor=A9A9A9)](https://github.com/Clic-stack/Booking-App/actions)[![SecOps: DAST Dynamic Scan](https://img.shields.io/badge/Scan-DAST%20Dynamic--SecOps-003366?style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=000033)](https://github.com/Clic-stack/Booking-App/actions) [![Real-World Integration Tests](https://img.shields.io/badge/Tests-Real--World%20Integration-FFD700?style=for-the-badge&logo=postgresql&logoColor=FFD700&labelColor=010B13)](https://github.com/Clic-stack/Booking-App/actions) [![API Contract: Postman Validation](https://img.shields.io/badge/Validation-API%20Contract--Postman-50C878?style=for-the-badge&logo=postman&logoColor=E5E5E5&labelColor=006400)](https://github.com/Clic-stack/Booking-App/actions)[![Continuous Integration (CI/CD) Tests](https://img.shields.io/badge/Tests-CI--Continuous%20Integration-FFFFFF?style=for-the-badge&logo=jest&logoColor=003366&labelColor=FFFDD0)](https://github.com/Clic-stack/Booking-App/actions)</p>
</p> 

> [!TIP] <p align="justify">
> **Quick Setup Note:** This project includes default values (*fallbacks*) for the `JWT_SECRET` in development and testing environments. This facilitates rapid deployment and ensures the test suite runs out of the box without extra security overhead.
[![Node.js CI (Booking-App Tests)](https://github.com/Clic-stack/Booking-App/actions/workflows/node.js.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/node.js.yml)[![SecOps: CodeQL Analysis](https://github.com/Clic-stack/Booking-App/actions/workflows/codeql.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/codeql.yml)[![SecOps: DAST Dynamic Scan](https://github.com/Clic-stack/Booking-App/actions/workflows/dast.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/dast.yml)[![API Contract: Postman Validation](https://github.com/Clic-stack/Booking-App/actions/workflows/postman-validation.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/postman-validation.yml)

A professional backend system built with **Express**, **Sequelize**, and **PostgreSQL** to manage hotel reservations. This project provides a complete API for handling users, cities, hotels, images, bookings, and reviews, ensuring a secure, scalable, and production-ready architecture.

---
</p>

## 🌐 Deployment

## 🚀 Backend: Server online with Render
🔗 https://booking-app-b5o8.onrender.com

---

## 📄 BookingApp: Documentation online with Postman
🔗 https://documenter.getpostman.com/view/48309056/2sBXVZnDx7

---

## 🌐 GitHub Repository
🔗 https://github.com/Clic-stack/Booking-App

---

## 🟢 Technical Quality Assurance (QA) & Automation

**What does the "passing" badge at the beginning of this project mean?** <p align="justify">
In high-stakes environments like hotel reservations, reliability and security are non-negotiable. Booking App is protected by a **5 pillar automated surveillance system**:

1.  **Static Analysis (CodeQL):** Scans the source code for logical errors and security flaws before deployment.
2.  **Dynamic Scan (DAST):** Tests the running application against real-world attack vectors (SecOps).
3.  **API Contract Validation:** Ensures the 25+ endpoints return exactly the data structure promised in the Postman documentation.
4.  **Real-World Integration:** Validates live connections between the API and the PostgreSQL database.
5.  **Continuous Integration (CI):** Executes the full suite of **Jest** and **Supertest** (22/25 core endpoints) on every push.

- **Green Badge (Passing):** Indicates the code is solid and secure. It has passed all quality inspections and is ready for use in a real-world production environment without unexpected errors.
- **Red Badge (Failing):** Acts as an emergency brake. If a technical error is detected, the system automatically blocks any updates before they can affect the end user or compromise data integrity.

**In summary:** This badge is your guarantee that the software has been built under professional standards, prioritizing stability and data protection at all times.

---
</p>

### 📊 Database Architecture

```mermaid
erDiagram
    USER ||--o{ BOOKING : "makes"
    USER ||--o{ REVIEW : "writes"
    HOTEL ||--o{ BOOKING : "receives"
    HOTEL ||--o{ REVIEW : "has"
    HOTEL ||--o{ IMAGE : "displays"
    CITY ||--o{ HOTEL : "contains"

    USER {
        string firstName
        string lastName
        string email
        string password
    }
    HOTEL {
        string name
        text description
        float price
        float averageRating
    }
    BOOKING {
        date checkIn
        date checkOut
    }
    REVIEW {
        int rating
        text comment
    }
```
---

## 🎯 Project Goals
This project was designed to: 
- Implement CRUD endpoints for **Users, Cities, Hotels, Images, Bookings, and Reviews**.
- Provide authentication and authorization using JWT.
- Enable hotel filtering by city and name, with average ratings calculated from reviews.
- Support reservations linked to logged-in users and enforce update restrictions.
- Deliver professional documentation and reproducible workflows for collaborative development.

---

## 🚀 Key Features & Implementation Details <p align="justify">
- ✅ **Full API Coverage (25 Endpoints):** 100% of required endpoints implemented, including private and public routes, ensuring a complete management system for Users, Cities, Hotels, Images, Bookings, and Reviews.
- 🧪 **Professional Testing Suite:** Robust implementation of **Jest** and **Supertest**, with automated tests for every endpoint to guarantee reliability and prevent regressions in the business logic.
- 🔐 **Advanced Authentication & Security:**
  - User login system with **JWT (JSON Web Tokens)**.
  - Protected routes requiring valid tokens for sensitive operations (Bookings, Reviews, User management).
  - Password hashing using **bcrypt** and security headers with **Helmet**.
- 📂 **Multimedia Management:** Integrated **Cloudinary** for professional image hosting and management, handled via **Multer** for seamless file uploads.
- 📊 **Smart Data Processing:**
  - **Dynamic Rating Calculation:** Automatically generates an `average` field for hotels by aggregating scores from all related reviews.
  - **Advanced Querying:** Smart search for hotels by `name` and `cityId`.
  - **Optimized Pagination:** Implemented `offset` and `perPage` logic for reviews to ensure high performance and scalability.
- 🛠️ **Clean Architecture & Reliable Workflows:**
  - **Centralized Error Handling** for predictable API responses.
  - **Relational Database Modeling** with Sequelize and PostgreSQL, ensuring data integrity and strictly enforcing update restrictions (e.g., preventing modification of `userId` in bookings).

---
</p>

## 📊 Project Architecture Summary
- **Backend:** Node.js & Express.
- **Database:** PostgreSQL with Sequelize ORM.
- **Storage:** Cloudinary API.
- **Documentation:** Postman (Online).
- **Deployment:** Render.

---

## 🧪 Testing Suite <p align="justify">

Quality assurance is a priority in this project. A comprehensive test suite was developed using **Jest** and **Supertest** to validate every layer of the API.

* **Total Coverage:** 22/25 mandatory endpoints tested (100% Core Business Logic).
* **Scope:** 
    * **Integration Tests:** Ensuring seamless interaction between routes, controllers, and the PostgreSQL database for Users, Cities, Hotels, Bookings, and Reviews.
    * **Security Tests:** Verifying JWT authorization and restricted access to private routes.
 
      **Note:** Image upload endpoints are verified through manual functional testing via Postman to optimize CI/CD performance and third-party storage usage.

To run the tests locally:
```bash
npm test
```

---
</p>

## 💻 Tech Stack
</br>
<div align="center"> 
    
| Backend Tools | Database       | Security & Middleware | Utilities   | QA               |
|---------------|----------------|-----------------------|-------------|------------------|
| Node.js       | PostgreSQL     | Helmet                | bcrypt      | Jest             |
| Express       | Sequelize      | CORS                  | uuid        | Supertest        |
| Morgan        | pg/pg-hstore   | JWT                   | multer      | Newman (Postman) |
| Cloudinary    |                |                       | streamifier | GitHub Actions   |

---
</br>
</div>

## 🧪 API Coverage
The following endpoints are implemented: 
### Users 

- `GET /users` – Retrieve all users (private) ✅
- `POST /users` – Create a new user (public) ✅
- `DELETE /users/:id` – Delete a user by ID (private) ✅
- `PUT /users/:id` – Update a user by ID (private) ✅
- `POST /users/login` – User login (public) ✅
  
### Cities

- `GET /cities` – Retrieve all cities (public) ✅
- `POST /cities` – Create a new city (private) ✅
- `DELETE /cities/:id` – Delete a city by ID (private) ✅
- `PUT /cities/:id` – Update a city by ID (private) ✅

### Hotels

- `GET /hotels` – Retrieve all hotels (public) ✅
- Supports queries: `name`, `cityId` Example: `/hotels?name=Four%20Seasons&cityId=1` 
- Includes field `average` with average rating from reviews. 
- `GET /hotels/:id` – Retrieve hotel by ID (public) ✅
- `POST /hotels` – Create a new hotel (private) ✅
- `DELETE /hotels/:id` – Delete a hotel by ID (private) ✅
- `PUT /hotels/:id` – Update a hotel by ID (private) ✅

### Images 

- `GET /images` – Retrieve all images (private) ✅*
- `POST /images` – Upload a new image (private) ✅*
- `DELETE /images/:id` – Delete an image by ID (private) ✅*

  *Validated through manual functional testing (Postman)

### Bookings 

- `GET /bookings` – Retrieve bookings of logged-in user (private) ✅
- `POST /bookings` – Create a booking (private, userId = logged-in user) ✅
- `DELETE /bookings/:id` – Delete a booking (private) ✅
- `PUT /bookings/:id` – Update booking dates (private, only `checkIn` and `checkOut`) ✅

### Reviews 
- `GET /reviews` – Retrieve all reviews (public) ✅
- Supports queries: `hotelId`, `offset`, `perPage` for pagination. 
- Example: `/reviews?hotelId=1&offset=0&perPage=10` 
- `POST /reviews` – Create a review (private, userId = logged-in user) ✅
- `DELETE /reviews/:id` – Delete a review (private) ✅
- `PUT /reviews/:id` – Update review rating/comment (private, userId and hotelId cannot be updated) ✅

---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
  "start": "node src/server.js",
  "test": "jest --runInBand --forceExit"
}
```

---

## 🗂️ Project Structure

```bash
📁 BOOKING-APP
|   ├── 📁 .github/
│   |   └── 📁 workflows/
│   |   |    └── codeql.yml
│   |   |    └── dast.yml
│   |   |    └── node.js.yml
│   |   |    └── postman-validation.yml
|   ├── 📁 node_modules/
|   ├── 📁 src/
│   |   └── 📁 config/
│   |   |    └── env.js
│   |   |    └── cloudinary.js
│   |   └── 📁 controllers/
│   |   |    └── booking.controller.js
│   |   |    └── city.controller.js
│   |   |    └── hotel.controller.js
│   |   |    └── image.controller.js
│   |   |    └── review.controller.js
│   |   |    └── user.controller.js
│   |   └── 📁 db/
│   |   |    └── connect.js
│   |   └── 📁 lib/
│   |   |    └── utils.js
│   |   └── 📁 middlewares/
│   |   |    └── auth.js
│   |   |    └── catchError.js
│   |   |    └── errorHandler.js
│   |   |    └── upload.js
│   |   └── 📁 models/
│   |   |    └── booking.model.js
│   |   |    └── city.model.js
│   |   |    └── hotel.model.js
│   |   |    └── Image.model.js
│   |   |    └── review.model.js
│   |   |    └── user.model.js
│   |   └── 📁 routes/
│   |   |    └── booking.route.js
│   |   |    └── city.route.js
│   |   |    └── hotel.route.js
│   |   |    └── image.route.js
│   |   |    └── index.js
│   |   |    └── review.route.js
│   |   |    └── user.route.js
│   |   └── app.js
│   |   └── server.js
|   ├── 📁 tests/
│   |   └── booking.test.js
│   |   └── city.test.js
│   |   └── hotel.test.js
│   |   └── review.test.js
│   |   └── setup.js
│   |   └── user.test.js
|   └── .env.example
|   └── .gitignore
|   └── booking-app.json
|   └── CONTRIBUTING.md
|   └── jest.config.js
|   └── package-lock.json
|   └── package.json
|   └── README.md
```
---

## ⚙️ Setup & Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Clic-stack/Booking-App.git
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Configure environment variables:
- Changes file name `.env.example` to `.env`
- Modify variable values.
- Example configuration:
  
  ```bash
  PORT=3000
  DATABASE_URL=postgres://user:password@localhost:5432/your_database
  JWT_SECRET=your_secret_key
  CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
  ```

  💡 Quick Setup Note: This project includes default values (fallbacks) for the `JWT_SECRET` in development and testing environments. This facilitates rapid deployment and ensures the test suite runs out-of-the-box without extra security overhead.
  
4. Run local server to verify correct configurations
   ```bash
    npm run dev
   ```
5. Run tests
   - Run all tests:
   ```bash
   npm test
   ```
   
   - Run individual test:
   ```bash
   npm test name_file.test.js
   ```
---

## 🚀 Future Roadmap: Data & DevOps Evolution
* **IaC (Infrastructure as Code):** Provisioning Azure resources using **Terraform** for a fully reproducible environment.
* **ETL Pipeline:** Implementation of automated data workflows to move operational data into an analytical warehouse.
* **Predictive Analytics:** Developing a **Machine Learning** model to provide personalized hotel recommendations based on user behavior and reviews.

---

## 🎨 Author
Developed by Clio Salgado. A data-driven fullstack developer focused on building reliable, secure, and highly automated backend solutions.
</br>
</br>

🔽 **Versión en Español** 🔽
</br>


## <p align="center"> 🏨 Booking App </p> <br/> <p align="center">[![SecOps: Análisis CodeQL](https://img.shields.io/badge/Análisis-CodeQL--SecOps-F5F5F5?style=for-the-badge&logo=github&logoColor=black&labelColor=A9A9A9)](https://github.com/Clic-stack/Booking-App/actions)[![SecOps: Escaneo Dinámico DAST](https://img.shields.io/badge/Escaneo-DAST%20Dinámico--SecOps-003366?style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=000033)](https://github.com/Clic-stack/Booking-App/actions)[![Pruebas de Integración Reales](https://img.shields.io/badge/Pruebas-Integración%20Real-FFD700?style=for-the-badge&logo=postgresql&logoColor=FFD700&labelColor=010B13)](https://github.com/Clic-stack/Booking-App/actions)[![Contrato API: Validación Postman](https://img.shields.io/badge/Validación-Contrato%20API--Postman-50C878?style=for-the-badge&logo=postman&logoColor=E5E5E5&labelColor=006400)](https://github.com/Clic-stack/Booking-App/actions)[![Pruebas de Integración Continua (CI/CD)](https://img.shields.io/badge/Pruebas-CI--Integración%20Continua-FFFFFF?style=for-the-badge&logo=jest&logoColor=003366&labelColor=FFFDD0)](https://github.com/Clic-stack/Booking-App/actions)
</p> 

> [!TIP] <p align="justify">
> **Nota de configuración rápida:** Este proyecto incluye valores por defecto (*fallbacks*) para la `JWT_SECRET` en entornos de desarrollo y pruebas. Esto facilita un despliegue rápido y garantiza que la suite de tests se ejecute correctamente de forma inmediata, sin configuraciones de seguridad adicionales.
[![Node.js CI (Booking-App Tests)](https://github.com/Clic-stack/Booking-App/actions/workflows/node.js.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/node.js.yml)[![SecOps: CodeQL Analysis](https://github.com/Clic-stack/Booking-App/actions/workflows/codeql.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/codeql.yml)[![SecOps: DAST Dynamic Scan](https://github.com/Clic-stack/Booking-App/actions/workflows/dast.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/dast.yml)[![API Contract: Postman Validation](https://github.com/Clic-stack/Booking-App/actions/workflows/postman-validation.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Booking-App/actions/workflows/postman-validation.yml)

Sistema de **backend profesional** construido con **Express, Sequelize** y **PostgreSQL** para la gestión de reservas hoteleras. Este proyecto ofrece una API completa para el manejo de usuarios, ciudades, hoteles, imágenes, reservas y reseñas, garantizando una arquitectura segura, escalable y lista para producción.

---
</p>

## 🌐 Despliegue

## 🚀 Backend: Servidor en línea con Render
🔗 https://booking-app-b5o8.onrender.com

---

## 📄 BookingApp: Documentación en línea con Postman
🔗 https://documenter.getpostman.com/view/48309056/2sBXVZnDx7

---

## 🌐 Repositorio en GitHub
🔗 https://github.com/Clic-stack/Booking-App

---

## 🟢 Garantía de Calidad Técnica (QA) y Automatización

**¿Qué significa el sello "passing" al inicio de este proyecto?** <p align="justify">
En entornos altamente críticos como las reservas hoteleras, la confiabilidad y la seguridad son innegociables. **Booking App** está protegida por un **sistema de vigilancia automatizado de 5 pilares:**

1. **Análisis Estático (CodeQL):** Escanea el código fuente en busca de errores lógicos y fallos de seguridad antes del despliegue.
2. **Escaneo Dinámico (DAST):** Evalúa la aplicación en ejecución frente a vectores de ataque del mundo real (SecOps).
3. **Validación de Contrato de API:** Garantiza que los más de 25 endpoints devuelvan exactamente la estructura de datos prometida en la documentación de Postman.
4. **Integración Real (Real-World):** Valida las conexiones en vivo entre la API y la base de datos PostgreSQL.
5. **Integración Continua (CI):** Ejecuta la suite completa de **Jest** y **Supertest** (cubriendo 22 de los 25 endpoints principales) con cada actualización de código (push).
   
- **Sello Verde (Passing):** Indica que el código es sólido y seguro. Ha superado todas las inspecciones de calidad y está listo para ser utilizado en un entorno de producción real sin errores inesperados.
- **Sello Rojo (Failing):** Actúa como un freno de emergencia. Si se detecta un error técnico, el sistema bloquea automáticamente cualquier actualización antes de que pueda afectar al usuario final o comprometer la integridad de los datos.

**En resumen:** Este sello es tu garantía de que el software ha sido construido bajo estándares profesionales, priorizando la estabilidad y la protección de los datos en todo momento.

---
</p>

### 📊 Arquitectura de la Base de Datos

```mermaid
erDiagram
    USER ||--o{ BOOKING : "makes"
    USER ||--o{ REVIEW : "writes"
    HOTEL ||--o{ BOOKING : "receives"
    HOTEL ||--o{ REVIEW : "has"
    HOTEL ||--o{ IMAGE : "displays"
    CITY ||--o{ HOTEL : "contains"

    USER {
        string firstName
        string lastName
        string email
        string password
    }
    HOTEL {
        string name
        text description
        float price
        float averageRating
    }
    BOOKING {
        date checkIn
        date checkOut
    }
    REVIEW {
        int rating
        text comment
    }
```

---

## 🎯 Objetivos del Proyecto
Este proyecto fue diseñado para: 
- Implementar un CRUD que contenga endpoints para **Usuarios, Ciudades, Hoteles, Imágenes, Reservaciones y Reseñas**.
- Proveer autenticación y autorización a usuarios usando JWT.
- Permitir el filtrado de hoteles usando `Query Params`, ya sea por ciudad o nombre con el cálculo de la calificación promedio de reseñas.
- Soportar reservaciones ligadas a usuarios logueados sin alterar las restricciones de integridad en la base de datos.
- Entregar documentación profesional y flujos de trabajo reproducibles para el desarrollo colaborativo.
  
---

## 🚀 Funcionalidades Principales y Detalles de Implementación <p align="justify">
- ✅ **Cobertura Total de la API (25 Endpoints):** 100% de los endpoints requeridos implementados, incluyendo rutas públicas y privadas, asegurando el manejo completo del sistema para Usuarios, Ciudades, Hoteles, Imágenes, Reservaciones y Reseñas.
- 🧪 **Suite de Testing Profesional:** Implementación robusta de **Jest** y **Supertest**, con tests automatizados para cada endpoint garantizando su fiabilidad, previniendo regresiones en la lógica de negocio.
- 🔐 **Seguridad y Autenticación Avanzada:**
  - Sistema de usuarios logueados con **JWT (JSON Web Tokens)**.
  - Rutas protegidas al requerir tokens válidos para operaciones sensibles (Reservaciones, Reseñas, Manejo de usuarios, etc.).
  - Contraseña hasheada usando **bcrypt** y cabeceras de seguridad con **Helmet**.
- 📂 **Gestión de Archivos Multimedia:** Integrando **Cloudinary** para el alojamiento y gestión profesional de imágenes, gestionado a través de **Multer** para cargas de archivos sin interrupciones.
- 📊 **Procesamiento Inteligente de Datos:**
  - **Cálculo Dinámico de Calificaciones:** Generando automáticamente un campo average (promedio) para los hoteles, calculando el puntaje a partir de todas las reseñas relacionadas.
  - **Consultas Avanzadas** Búsquedas inteligentes para hoteles por  `nombre` y `ID de ciudad`.
  - **Paginación optimizada** Implementando lógica `offset` y `perPage` para reseñas, garantizando un alto rendimiento y escalabilidad.
- 🛠️ **Arquitectura Limpia y  & Flujos de Trabajo Confiables:**
  - **Manejo Centralizado de Errores** para lograr respuestas de API predecibles.
  - **Modelado Relacional en la Base de Datos** con Sequelize y PostgreSQL, garantizando la integridad de los datos y aplicando restricciones de actualización estrictas (previniendo la modificación de `userId` en reservaciones).

---
</p>

## 📊 Resumen de Arquitectura de Proyecto
- **Backend:** Node.js & Express.
- **Database:** PostgreSQL with Sequelize ORM.
- **Storage:** Cloudinary API.
- **Documentation:** Postman (Online).
- **Deployment:** Render.

---

## 🧪 Suite de Pruebas <p align="justify">

El aseguramiento en la calidad es una prioridad en este proyecto. Es por ello que se desarrolló una suite integral de tests usando **Jest** y **Supertest** para validar cada capa dentro de la API.

* **Cobertura Total:** 22/25 endpoints testeados (100% de la lógica de negocio principal).
* **Alcance:**  
    * **Pruebas de Integración:** Asegurando una interacción fluida entre rutas, controladores y la base de datos PostgreSQL para Usuarios, Ciudades, Hoteles, Reservaciones y Reseñas.
    * **Pruebas de Seguridad:** Verificación de autorización con JWT y acceso restringido a rutas privadas.
 
      Nota: Los endpoints de carga de imágenes se verifican mediante pruebas funcionales manuales a través de Postman para optimizar el rendimiento del CI/CD y el uso del almacenamiento de terceros.

Para correr los tests localmente:
```bash
npm test
```

---
</p>

## 💻 Tech Stack
</br>
<div align="center">
    
| Herramientas de Backend | Base de Datos  | Seguridad y Middleware | Utilidades  | QA               |
|-------------------------|----------------|------------------------|-------------|------------------|
| Node.js                 | PostgreSQL     | Helmet                 | bcrypt      | Jest             |
| Express                 | Sequelize      | CORS                   | uuid        | Supertest        |
| Morgan                  | pg/pg-hstore   | JWT                    | multer      | Newman (Postman) |
| Cloudinary              |                |                        | streamifier | GitHub Actions   |

---
</br>
</div>

## 🧪 Cobertura en API
Los siguientes endpoints fueron implementados: 
### Usuarios 

- `GET /users` – Obtiene todos los usuarios (privado) ✅
- `POST /users` – Crea un nuevo usuario (público) ✅
- `DELETE /users/:id` – Elimina un usuario por ID (privado) ✅
- `PUT /users/:id` – Actualiza un usuario por ID (privado) ✅
- `POST /users/login` – Usuario Logueado (público) ✅
  
### Ciudades

- `GET /cities` – Obtiene todas las ciudades (público) ✅
- `POST /cities` – Crea una nueva ciudad (privado) ✅
- `DELETE /cities/:id` – Elimina una ciudad por ID (privado) ✅
- `PUT /cities/:id` – Actualiza una ciudad por ID (privado) ✅

### Hoteles

- `GET /hotels` – Obtiene todos los hoteles (público) ✅
- Soporta consultas: `name`, `cityId` Ejemplo: `/hotels?name=Four%20Seasons&cityId=1` 
- Incluye campos `average` con promedio de valoración de reseñas. 
- `GET /hotels/:id` – Obtiene un hotel por ID (público) ✅
- `POST /hotels` – Crea un nuevo hotel (privado) ✅
- `DELETE /hotels/:id` – Elimina un hotel por ID (privado) ✅
- `PUT /hotels/:id` – Actualiza un hotel por ID (privado) ✅

### Imágenes 

- `GET /images` – Obtiene todas las imágenes (privado) ✅*
- `POST /images` – Crea una nueva imagen (privado) ✅*
- `DELETE /images/:id` – Elimina una imagen por ID (privado) ✅*

  *Validado mediante pruebas funcionales manuales (Postman)

### Reservaciones 

- `GET /bookings` – Obtiene las reservaciones del usuario logueado (privado) ✅
- `POST /bookings` – Crea una reservación (privado, userId = logged-in user) ✅
- `DELETE /bookings/:id` – Elimina una reservación (privado) ✅
- `PUT /bookings/:id` – Actualiza días de la reservación (privado, solo `checkIn` y `checkOut`) ✅

### Reseñas 
- `GET /reviews` – Obtiene todas las reseñas (público) ✅
- Soporta consultas: `hotelId`, `offset`, `perPage` para paginación. 
- Ejemplo: `/reviews?hotelId=1&offset=0&perPage=10` 
- `POST /reviews` – Crea una reseña (privado, userId = logged-in user) ✅
- `DELETE /reviews/:id` – Elimina una reseña (privado) ✅
- `PUT /reviews/:id` – Actualiza la calificación o el comentario de una reseña (privado, `userId` y `hotelId` no se pueden actualizar) ✅

---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
  "start": "node src/server.js",
  "test": "jest --runInBand --forceExit"
}
```

---

## 🗂️ Estructura de Proyecto

```bash
📁 BOOKING-APP
|   ├── 📁 .github/
│   |   └── 📁 workflows/
│   |   |    └── codeql.yml
│   |   |    └── dast.yml
│   |   |    └── node.js.yml
│   |   |    └── postman-validation.yml
|   ├── 📁 node_modules/
|   ├── 📁 src/
│   |   └── 📁 config/
│   |   |    └── env.js
│   |   |    └── cloudinary.js
│   |   └── 📁 controllers/
│   |   |    └── booking.controller.js
│   |   |    └── city.controller.js
│   |   |    └── hotel.controller.js
│   |   |    └── image.controller.js
│   |   |    └── review.controller.js
│   |   |    └── user.controller.js
│   |   └── 📁 db/
│   |   |    └── connect.js
│   |   └── 📁 lib/
│   |   |    └── utils.js
│   |   └── 📁 middlewares/
│   |   |    └── auth.js
│   |   |    └── catchError.js
│   |   |    └── errorHandler.js
│   |   |    └── upload.js
│   |   └── 📁 models/
│   |   |    └── booking.model.js
│   |   |    └── city.model.js
│   |   |    └── hotel.model.js
│   |   |    └── Image.model.js
│   |   |    └── review.model.js
│   |   |    └── user.model.js
│   |   └── 📁 routes/
│   |   |    └── booking.route.js
│   |   |    └── city.route.js
│   |   |    └── hotel.route.js
│   |   |    └── image.route.js
│   |   |    └── index.js
│   |   |    └── review.route.js
│   |   |    └── user.route.js
│   |   └── app.js
│   |   └── server.js
|   ├── 📁 tests/
│   |   └── booking.test.js
│   |   └── city.test.js
│   |   └── hotel.test.js
│   |   └── review.test.js
│   |   └── setup.js
│   |   └── user.test.js
|   └── .env.example
|   └── .gitignore
|   └── booking-app.json
|   └── CONTRIBUTING.md
|   └── jest.config.js
|   └── package-lock.json
|   └── package.json
|   └── README.md
```
---

## ⚙️ Configuración e Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/Clic-stack/Booking-App.git
   ```
2. Instala dependencias:
   ```bash
   npm i
   ```
3. Configura variables de entorno:
- Cambia el nombre del archivo `.env.example` a `.env`
- Modifica los valores de las variables.
- Ejemplo de configuración:
  
  ```bash
  PORT=3000
  DATABASE_URL=postgres://user:password@localhost:5432/your_database
  JWT_SECRET=your_secret_key
  CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
  ```

  💡 Nota de configuración rápida: El proyecto incluye valores por defecto (fallbacks) para la `JWT_SECRET` en entornos de desarrollo y prueba. Esto facilita un despliegue rápido y permite que la suite de tests funcione de inmediato sin configuraciones complejas de seguridad adicionales.
  
4. Corre el servidor local para verificar que las configuraciones sean correctas:
   ```bash
    npm run dev
   ```
5. Corre tests.
   - Corre todos los tests:
   ```bash
   npm test
   ```
   
   - Corre el test individualmente:
   ```bash
   npm test name_file.test.js
   ```
---

## 🚀 Hoja de Ruta: Evolución de Datos y DevOps (Future Roadmap) <p align="justify">
* **IaC (Infraestructura como Código):** Aprovisionamiento de recursos en **Azure** utilizando Terraform para un entorno totalmente reproducible.
* **Pipeline ETL:** Implementación de flujos de datos automatizados para mover datos operacionales hacia un almacén analítico (Data Warehouse).
* **Analítica Predictiva:** Desarrollo de un modelo de **Machine Learning** para proporcionar recomendaciones de hoteles personalizadas basadas en el comportamiento del usuario y sus reseñas.

---
</p>

## 🎨 Autora <p align="justify"> 
Desarrollado por Clio Salgado. Desarrolladora Fullstack orientada a datos, enfocada en la construcción de soluciones de backend confiables, seguras y altamente automatizadas.
</p>
