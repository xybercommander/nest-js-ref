import { 
    Request,
    Controller,
    Post,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')  
export class AuthController {
    
    @UseGuards(AuthGuard('local'))
    @Post("/login")
    async login(@Request() req: any) {
        return req.user; // Passport allows us to use this directly and not use the service
    }

}
