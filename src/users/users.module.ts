import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ApiServicesService } from 'src/api-services/api-services.service';
import { User, UserSchema } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ConfigModule,
    HttpModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, ApiServicesService],
  exports: [UsersService],
})
export class UsersModule {}
