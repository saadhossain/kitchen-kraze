import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Users {
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    role: string;
    @Prop()
    pictureUrl:string;
    @Prop()
    userId:string
    @Prop()
    createdAt: Date
}
export const UsersSchema = SchemaFactory.createForClass(Users);