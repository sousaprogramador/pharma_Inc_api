import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { UserController } from './user/user.controller';
import { AppController } from './app.controller';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [
    ConfigService,
    {
      provide: 'TOKEN_SERVICE',
      useFactory: (configService: ConfigService) => {
        const tokenServiceOptions = configService.get('tokenService');
        return ClientProxyFactory.create(tokenServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
