import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateHotelService from '../services/CreateHotelService';

const hotelsRouter = Router();

hotelsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const {
    name,
    stars,
    description,
    address,
    city,
    state,
    zipcode,
    phone,
  } = request.body;

  const createHotel = new CreateHotelService();

  const user = await createHotel.execute({
    user_id: request.user.id,
    name,
    stars,
    description,
    address,
    city,
    state,
    zipcode,
    phone,
  });

  return response.status(201).json(user);
});

export default hotelsRouter;
