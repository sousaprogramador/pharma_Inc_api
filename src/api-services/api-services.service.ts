import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ApiServicesService {
  constructor(private httpService: HttpService) {}

  async getHttpResponse(url: string): Promise<any> {
    return await this.httpService
      .get(url)
      .toPromise()
      .then((res) => {
        return res.data;
      });
  }
}
