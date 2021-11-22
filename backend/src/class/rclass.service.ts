import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RClassDocument, RClass } from './rclass.schema';
import * as bcrypt from "bcrypt"

@Injectable()
export class RClassService {

  constructor(@InjectModel(RClass.name) private rclassModel: Model<RClassDocument>) { }

  async createRClass(newRClassInfo: RClassInfo): Promise<string> {
    const newClass = new this.rclassModel({
      code: newRClassInfo.code,
      name: newRClassInfo.name,
      section: newRClassInfo.section,
      room: newRClassInfo.room,
      token: await bcrypt.hash(newRClassInfo.room, 10),
    });

    const createRClass: RClassDocument = await newClass.save();

    return `The token is ${createRClass.token}`;
  }

  async auth(authRClass: Auth): Promise<string> {
    const rclass: RClassDocument = await this.rclassModel.findOne({
      email: authRClass.email,
    });

    if (rclass === null) {
      return "User not found!";
    }
    else {
      const isMatch = await bcrypt.compare(authRClass.token, rclass.token);

      return isMatch ? "User is logged!" : "User is not logged!";
    }
  }

}
