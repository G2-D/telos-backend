import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateRoomService from '../services/CreateRoomService';

const roomsRouter = Router();

roomsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { hotel_id, type, number, description, max_size, price } = request.body;

  const createRoom = new CreateRoomService();

  const room = await createRoom.execute({
    hotel_id,
    type,
    number,
    description,
    max_size,
    price,
  });

  return response.status(201).json(room);
});

export default roomsRouter;
