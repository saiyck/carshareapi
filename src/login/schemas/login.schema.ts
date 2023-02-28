import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import {HydratedDocument} from "mongoose"

export type LoginDocument = HydratedDocument<Login>;

@Schema()
export class Login {
    @Prop()
    username: string

    @Prop()
    password: string
}

export const LoginSchema = SchemaFactory.createForClass(Login);