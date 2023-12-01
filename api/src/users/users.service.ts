import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Users } from 'src/schema/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private readonly userModel: Model<Users>) { }

    async createUser(users: CreateUserDto): Promise<Users> {
        const createdUser = new this.userModel(users);
        return createdUser.save();
    }

    async getUsers(): Promise<Users[]> {
        return this.userModel.find();
    }
}