import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RClassModule } from './class/rclass.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot("mongodb+srv://dbPierre:1234@cluster0.dfnsu.mongodb.net/nest?retryWrites=true&w=majority"),
    RClassModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
