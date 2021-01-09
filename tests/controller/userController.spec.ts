
import * as TypeMoq from 'typemoq';
import 'reflect-metadata';

import { User } from '#/domain/user';
import { UserService } from '#/service/userService';
import { UserControllerImpl } from '#/controller/userControllerImpl'

test('whoami', async () => {
    const user: User = {
        name: 'hogehoge',
        email: 'foo@example.com'
    };
    const mockUserService = TypeMoq.Mock.ofType<UserService>();
    mockUserService
        .setup(m => m.whoami(''))
        .returns(() => user);
    const controller = new UserControllerImpl(mockUserService.object);
    const result = controller.whoami('');
    expect(result).toBe(user);
});
