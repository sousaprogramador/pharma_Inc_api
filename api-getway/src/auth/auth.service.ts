import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateApiKey(apiKey: string) {
    return apiKey === 'Bdvmz0yPBDy0MH4i';
  }
}
