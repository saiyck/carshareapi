import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import {HydratedDocument} from "mongoose"

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    username: string

    @Prop()
    password: string

    @Prop()
    firstName:string

    @Prop()
    lastName:string
}

export const UserSchema = SchemaFactory.createForClass(User);