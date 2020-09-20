import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
}

class CreateUserService {
  public async execute({
    name,
    lastname,
    email,
    password,
    phone,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email addres already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      lastname,
      email,
      password: hashedPassword,
      phone,
    });

    await usersRepository.save(user);

    user.password = '';

    return user;
  }
}

export default CreateUserService;
