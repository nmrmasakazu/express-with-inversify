import { User } from '../domain/user'

export interface UserController {
    whoami(name: string): User;
}
