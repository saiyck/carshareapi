import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChangeLogin } from './dto/change-login.dto';
import { CreateLoginDto, CreateUserDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { User, UserDocument } from './schemas/login.schema';

@Injectable()
export class LoginService {

constructor(@InjectModel(User.name) private loginModal : Model<UserDocument>){}

 async create(createLoginDto: CreateLoginDto) {
  try {
    const user = await this.loginModal.findOne({username: createLoginDto.username});
    if(user){
      if(user.password == createLoginDto.password){
        return {
          statusCode: 200,
          status: true,
          message : "user logged in successfully!",
          data : user
        }
      }else{
        return {
          statusCode: 400,
          status: false,
          message : "wrong password",
          data:null
        }
      }
    }else{
      return {
        statusCode: 404,
        status: false,
        message: "user not found",
        data:null
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      status: false,
      message : "Internal server error",
      data:null
    }
  }
    
  }

  async changePassword(changeLoginDto: ChangeLogin){
   try {
    const user = await this.loginModal.findOne({username: changeLoginDto.username});
    if(user){
      if(user.password == changeLoginDto.oldpassword){
       await this.loginModal.updateOne({username: changeLoginDto.username},{username: changeLoginDto.username, password : changeLoginDto.newpassword});
       const users = await this.loginModal.findOne({username: changeLoginDto.username});
        return {
          statusCode: 200,
          status: true,
          message : "password changed successfully",
          data : users
        }
      }else{
        return {
          statusCode: 400,
          status: false,
          message : "wrong password"
        }
      }
    }else{
      return {
        statusCode: 404,
        status: false,
        message: "user not found"
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      status: false,
      message : "Internal server error"
    }
  } 
  }

 async findAll() {
    return await this.loginModal.find();
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const user = await this.loginModal.findOne({username: createUserDto.username});
      if(!user){
        const createUser = new this.loginModal(createUserDto);
        createUser.save();
        return {
          statusCode: 200,
          status: true,
          message: "user created"
        };
      }else{
        return {
          statusCode: 400,
          status: false,
          message: "user already exist"
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        status: false,
        message : "Internal server error"
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
