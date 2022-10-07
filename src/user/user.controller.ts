import { 
    Controller,
    Get,
    Post,
    Req,
    Body,
    Param,
    Patch,
    Delete,
    ParseIntPipe
} from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";


@Controller('/user') // /user/
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.get();
    }

    @Get("/:userId")
    getUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.getUser(userId);
    }

    @Post()
    storeUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Patch("/:userId")
    updateUser(
        @Body() updateUserDTO: UpdateUserDto, 
        @Param('userId', ParseIntPipe) userId: number
    ) {
        return this.userService.update(updateUserDTO, userId);
    }

    @Delete("/:userId")
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(userId)
    }

}
