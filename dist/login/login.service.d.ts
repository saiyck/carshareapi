/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { ChangeLogin } from './dto/change-login.dto';
import { CreateLoginDto, CreateUserDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { User, UserDocument } from './schemas/login.schema';
export declare class LoginService {
    private loginModal;
    constructor(loginModal: Model<UserDocument>);
    create(createLoginDto: CreateLoginDto): Promise<{
        statusCode: number;
        status: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, User> & Omit<User & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    changePassword(changeLoginDto: ChangeLogin): Promise<{
        statusCode: number;
        status: boolean;
        message: string;
        data: import("mongoose").Document<unknown, any, User> & Omit<User & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    } | {
        statusCode: number;
        status: boolean;
        message: string;
        data?: undefined;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, User> & Omit<User & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createUser(createUserDto: CreateUserDto): Promise<{
        statusCode: number;
        status: boolean;
        message: string;
    }>;
    findOne(id: number): string;
    update(id: number, updateLoginDto: UpdateLoginDto): string;
    remove(id: number): string;
}
