import { Module } from '@nestjs/common';
import { RClassService } from './rclass.service';
import { RClassController } from './rclass.controller';

@Module({
  providers: [RClassService],
  controllers: [RClassController]
})
export class RClassModule { }
