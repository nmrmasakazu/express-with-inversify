import { User } from '../domain/user'

export interface UserRepository {
    whoami(name: string): User;
}
