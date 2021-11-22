import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async createUser(newUserInfo: UserInfo): Promise<string> {
    const newUser = new this.userModel({
      name: newUserInfo.name,
      lastName: newUserInfo.lastName,
      email: newUserInfo.email,
      password: await bcrypt.hash(newUserInfo.password, 10),
    });

    const createUser: UserDocument = await newUser.save();

    return `This is a new user ${createUser._id}`;
  }

  async auth(authUser: Auth): Promise<string> {
    const user: UserDocument = await this.userModel.findOne({
      email: authUser.email,
    });

    if (user === null) {
      return "User not found!";
    }
    else {
      const isMatch = await bcrypt.compare(authUser.password, user.password);

      return isMatch ? "User is logged!" : "User is not logged!";
    }
  }
}
