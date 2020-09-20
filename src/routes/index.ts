import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import hotelsRouter from './hotels.routes';
import roomsRouter from './rooms.routes';
import bookingsRouter from './bookings.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/hotels', hotelsRouter);
routes.use('/rooms', roomsRouter);
routes.use('/bookings', bookingsRouter);

export default routes;
