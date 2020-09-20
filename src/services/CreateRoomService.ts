import { getRepository } from 'typeorm';

// import AppError from '../errors/AppError';

import Room from '../models/Room';

interface Request {
  hotel_id: string;
  type: string;
  number: number;
  description: string;
  max_size: number;
  price: number;
}

class CreateRoomService {
  public async execute({
    hotel_id,
    type,
    number,
    description,
    max_size,
    price,
  }: Request): Promise<Room> {
    const roomsRepository = getRepository(Room);

    const room = roomsRepository.create({
      hotel_id,
      type,
      number,
      description,
      max_size,
      price,
    });

    await roomsRepository.save(room);

    return room;
  }
}

export default CreateRoomService;
