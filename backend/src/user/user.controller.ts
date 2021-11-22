import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('auth')
  async authUser(@Body() auth: Auth): Promise<string> {
    return await this.userService.auth(auth);
  }

  @Post()
  async createUser(@Body() newUser: UserInfo): Promise<string> {
    return await this.userService.createUser(newUser);
  }
}
