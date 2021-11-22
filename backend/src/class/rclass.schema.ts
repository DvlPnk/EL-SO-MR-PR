import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RClassDocument = RClass & Document;

@Schema({ collection: "rclass " })
export class RClass {

  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  section: string;

  @Prop()
  room: string;

  @Prop()
  token: string;
}

export const RClassSchema = SchemaFactory.createForClass(RClass);