import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable() 
export class UserService {

    //------- GET -------//
    get() {
        return {
            "name": "Samrat",
            "email": "samratmukherjee.sps@gmail.com",
        };
    }

    getUser( userId: number ) {
        return userId;
    }

    //------- POST -------//
    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    //------- UPDATE -------//
    update(
        updateUserDTO: UpdateUserDto, 
        userId: number
    ) {
        return {
            body: updateUserDTO,
            userId: userId
        };
    }

    //------- DELETE -------//
    delete(userId: number ) {
        return userId;
    }

}
