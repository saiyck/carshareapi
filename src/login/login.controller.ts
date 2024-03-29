import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto, CreateUserDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ChangeLogin } from './dto/change-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Post('signup')
  createUser(@Body() createUserDto : CreateUserDto){
    console.log('create',createUserDto);
    return this.loginService.createUser(createUserDto);
  }

  @Post('changepassword')
  changePassword(@Body() changeLoginDto: ChangeLogin) {
    return this.loginService.changePassword(changeLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
