import { User } from '#/domain/user';
import { injectable, inject } from 'inversify';
import { UserRepository } from './userRepository';

@injectable()
class UserRepositoryImpl implements UserRepository {

    whoami(name: string): User {
        const sampleUser: User = {
            name: 'nmrmasakazu',
            email: 'hogehoge@nmrmasakazu.com'
        };
        return sampleUser;
    }
}

export { UserRepositoryImpl };
