import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, lastname, email, password, phone } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    lastname,
    email,
    password,
    phone,
  });

  return response.status(201).json(user);
});

export default usersRouter;
