import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
  Query,
  Inject,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { IUserResponse } from './interfaces/user-response.interface';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns a list of users.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async index(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<IUserResponse[]> {
    return await firstValueFrom(
      this.userServiceClient.send('user_index', paginationQuery),
    );
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Returns a specific user data.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async show(@Param('id') id: string): Promise<User> {
    return await firstValueFrom(this.userServiceClient.send('user_show', id));
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Updates a specific user data.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await firstValueFrom(
      this.userServiceClient.send('user_update', {
        id,
        updateUserDto,
      }),
    );
  }

  @ApiResponse({
    status: 204,
    description: 'Deletes a specific user.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    return await firstValueFrom(
      this.userServiceClient.send('user_destroy', id),
    );
  }
}
