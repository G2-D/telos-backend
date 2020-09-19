import { getRepository } from 'typeorm';

// import AppError from '../errors/AppError';

import Hotel from '../models/Hotel';

interface Request {
  user_id: string;
  name: string;
  stars: number;
  description: string;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  phone: string;
}

class CreateHotelService {
  public async execute({
    user_id,
    name,
    stars,
    description,
    address,
    city,
    state,
    zipcode,
    phone,
  }: Request): Promise<Hotel> {
    const hotelsRepository = getRepository(Hotel);

    const hotel = hotelsRepository.create({
      user_id,
      name,
      stars,
      description,
      address,
      city,
      state,
      zipcode,
      phone,
    });

    await hotelsRepository.save(hotel);

    return hotel;
  }
}

export default CreateHotelService;
