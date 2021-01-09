import { User } from '#/domain/user';
import { injectable, inject } from 'inversify';
import TYPES from '../constant/types'
import { UserController } from './userController'
import { UserService } from '../service/userService'

import { controller, httpGet } from "inversify-express-utils";

@controller("/")
class UserControllerImpl implements UserController {

    private readonly userService: UserService;

    public constructor(
	    @inject(TYPES.UserService) userService: UserService,
    ) {
        this.userService = userService;
    }

    @httpGet('/')
    whoami(name: string): User {
        return this.userService.whoami(name);
    }
}

export { UserControllerImpl };
