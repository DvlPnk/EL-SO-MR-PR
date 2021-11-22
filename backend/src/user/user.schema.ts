import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types, Document } from "mongoose"

export type UserDocument = User & Document;

@Schema({ collection: "user" })
export class User {

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);