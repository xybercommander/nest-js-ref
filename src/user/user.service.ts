import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable() 
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    //------- GET -------//
    get(): Promise<User[]> {
        return this.userRepository.find()
    }

    getUser(userId: number): Promise<User> {
        return this.userRepository.findOne({
            where: { id: userId }
        });
    }

    getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({
            where: { email }
        })
    }

    //------- POST -------//
    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
    }

    //------- UPDATE -------//
    update(
        updateUserDTO: UpdateUserDto, 
        userId: number
    ) {
        return this.userRepository.update(userId, updateUserDTO);
    }

    //------- DELETE -------//
    delete(userId: number) {
        return this.userRepository.delete(userId);
    }

}
