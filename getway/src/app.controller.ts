import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'REST Back-end Challenge 20201209 Running';
  }
}
