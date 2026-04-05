import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Ventana de 15 minutos
  max: 100, // Límite de 100 peticiones por IP por cada 15 minutos
  message: {
    message: "Demasiadas peticiones desde esta IP, por favor intenta de nuevo después de 15 minutos."
  },
  standardHeaders: true, // Retorna info del límite en los headers `RateLimit-*`
  legacyHeaders: false, // Desactiva los headers `X-RateLimit-*`
});