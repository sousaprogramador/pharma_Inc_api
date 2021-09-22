import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiServicesService } from './api-services.service';

@Module({
  imports: [HttpModule],
  providers: [ApiServicesService],
  exports: [ApiServicesService],
})
export class ApiServicesModule {}
