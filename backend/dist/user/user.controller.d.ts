import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    authUser(auth: Auth): Promise<string>;
    createUser(newUser: UserInfo): Promise<string>;
}
