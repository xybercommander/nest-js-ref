import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { User } from "./user/entity/user.entity";
import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'nestjs',
            entities: [User],
            synchronize: true,
        }),
    ],
    controllers: [AppController]
})
export class AppModule {}