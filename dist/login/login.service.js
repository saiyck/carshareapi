"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const login_schema_1 = require("./schemas/login.schema");
let LoginService = class LoginService {
    constructor(loginModal) {
        this.loginModal = loginModal;
    }
    async create(createLoginDto) {
        try {
            const user = await this.loginModal.findOne({ username: createLoginDto.username });
            if (user) {
                if (user.password == createLoginDto.password) {
                    return {
                        statusCode: 200,
                        status: true,
                        message: "user logged in successfully!",
                        data: user
                    };
                }
                else {
                    return {
                        statusCode: 400,
                        status: false,
                        message: "wrong password",
                        data: null
                    };
                }
            }
            else {
                return {
                    statusCode: 404,
                    status: false,
                    message: "user not found",
                    data: null
                };
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                status: false,
                message: "Internal server error",
                data: null
            };
        }
    }
    async changePassword(changeLoginDto) {
        try {
            const user = await this.loginModal.findOne({ username: changeLoginDto.username });
            if (user) {
                if (user.password == changeLoginDto.oldpassword) {
                    await this.loginModal.updateOne({ username: changeLoginDto.username }, { username: changeLoginDto.username, password: changeLoginDto.newpassword });
                    const users = await this.loginModal.findOne({ username: changeLoginDto.username });
                    return {
                        statusCode: 200,
                        status: true,
                        message: "password changed successfully",
                        data: users
                    };
                }
                else {
                    return {
                        statusCode: 400,
                        status: false,
                        message: "wrong password"
                    };
                }
            }
            else {
                return {
                    statusCode: 404,
                    status: false,
                    message: "user not found"
                };
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                status: false,
                message: "Internal server error"
            };
        }
    }
    async findAll() {
        return await this.loginModal.find();
    }
    async createUser(createUserDto) {
        try {
            const user = await this.loginModal.findOne({ username: createUserDto.username });
            if (!user) {
                const createUser = new this.loginModal(createUserDto);
                createUser.save();
                return {
                    statusCode: 200,
                    status: true,
                    message: "user created"
                };
            }
            else {
                return {
                    statusCode: 400,
                    status: false,
                    message: "user already exist"
                };
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                status: false,
                message: "Internal server error"
            };
        }
    }
    findOne(id) {
        return `This action returns a #${id} login`;
    }
    update(id, updateLoginDto) {
        return `This action updates a #${id} login`;
    }
    remove(id) {
        return `This action removes a #${id} login`;
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(login_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map