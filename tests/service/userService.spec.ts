
import * as TypeMoq from 'typemoq';
import 'reflect-metadata';

import { User } from '#/domain/user';
import { UserRepository } from '#/repository/userRepository';
import { UserServiceImpl } from '#/service/userServiceImpl'

test('whoami', async () => {
    const user: User = {
        name: 'hogehoge',
        email: 'foo@example.com'
    };
    const mockUserService = TypeMoq.Mock.ofType<UserRepository>();
    mockUserService
        .setup(m => m.whoami(''))
        .returns(() => user);
    const controller = new UserServiceImpl(mockUserService.object);
    const result = controller.whoami('');
    expect(result).toBe(user);
});
