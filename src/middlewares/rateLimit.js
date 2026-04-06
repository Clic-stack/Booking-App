import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: (process.env.NODE_ENV === 'test') ? 0 : 100, // 0 suele desactivarlo o poner un límite infinito dependiendo de la versión
  // Una mejor opción es usar la propiedad 'skip':
  skip: () => process.env.NODE_ENV === 'test', // Si estamos en tests, no limites nada
  message: {
    message: "Demasiadas peticiones..."
  },
  standardHeaders: true,
  legacyHeaders: false,
});