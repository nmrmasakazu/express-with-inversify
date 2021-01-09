import { User } from '#/domain/user';
import { injectable, inject } from 'inversify';
import TYPES from '../constant/types'
import { UserService } from './userService'
import { UserRepository } from '../repository/userRepository'

@injectable()
class UserServiceImpl implements UserService {

    private userRepository: UserRepository;

    public constructor(
	    @inject(TYPES.UserRepository) userRepository: UserRepository,
    ) {
        this.userRepository = userRepository;
    }

    whoami(name: string): User {
        return this.userRepository.whoami(name);
    }
}

export { UserServiceImpl };
