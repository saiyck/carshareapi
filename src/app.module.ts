import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sai967621:959CelAhokejPnZj@cluster0.slchmpv.mongodb.net/poolapp?retryWrites=true&w=majority') ,LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
