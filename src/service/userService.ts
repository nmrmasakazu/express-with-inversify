import { User } from '../domain/user'

export interface UserService {
    whoami(name: string): User;
}
