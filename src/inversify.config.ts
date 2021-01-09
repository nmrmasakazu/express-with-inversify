import { Container } from 'inversify';
import TYPES from './constant/types';

import { UserController } from './controller/userController';
import { UserService } from './service/userService';
import { UserRepository } from './repository/userRepository';

import { UserControllerImpl } from './controller/userControllerImpl';
import { UserServiceImpl } from './service/userServiceImpl';
import { UserRepositoryImpl } from './repository/userRepositoryImpl';

const container = new Container();
container.bind<UserController>(TYPES.UserController).to(UserControllerImpl).inSingletonScope();
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl).inSingletonScope();
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl).inSingletonScope();

export { container };
