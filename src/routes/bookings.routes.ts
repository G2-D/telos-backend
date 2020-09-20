import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateBookingService from '../services/CreateBookingService';

const bookingsRouter = Router();

bookingsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { hotel_id, room_id, check_in, check_out } = request.body;

  const createHotel = new CreateBookingService();

  const booking = await createHotel.execute({
    user_id: request.user.id,
    hotel_id,
    room_id,
    check_in,
    check_out,
  });

  return response.status(201).json(booking);
});

export default bookingsRouter;
