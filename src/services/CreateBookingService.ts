import { getRepository } from 'typeorm';

// import AppError from '../errors/AppError';

import Booking from '../models/Booking';

interface Request {
  hotel_id: string;
  user_id: string;
  room_id: string;
  check_in: Date;
  check_out: Date;
}

class CreateBookingService {
  public async execute({
    hotel_id,
    user_id,
    room_id,
    check_in,
    check_out,
  }: Request): Promise<Booking> {
    const bookingsRepository = getRepository(Booking);

    const booking = bookingsRepository.create({
      hotel_id,
      user_id,
      room_id,
      check_in,
      check_out,
    });

    await bookingsRepository.save(booking);

    return booking;
  }
}

export default CreateBookingService;
