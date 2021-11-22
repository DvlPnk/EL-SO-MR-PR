import { Module } from '@nestjs/common';
import { RClassService } from './rclass.service';
import { RClassController } from './rclass.controller';
import { RClass, RClassSchema } from './rclass.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RClass.name, schema: RClassSchema }])
  ],
  providers: [RClassService],
  controllers: [RClassController],
})
export class RClassModule { }
