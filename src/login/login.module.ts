import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Login, LoginSchema } from './schemas/login.schema';

@Module({
  imports: [MongooseModule.forFeature([{name : Login.name, schema : LoginSchema}])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
