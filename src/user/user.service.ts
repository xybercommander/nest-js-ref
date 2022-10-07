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

    getUser(params: { userId: number }) {
        return params;
    }

    //------- POST -------//
    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    //------- UPDATE -------//
    update(
        updateUserDTO: UpdateUserDto, 
        params: { userId: number }
    ) {
        return {
            body: updateUserDTO,
            params: params
        };
    }

    //------- DELETE -------//
    delete(params: { userId: number }) {
        return params;
    }

}
