import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

import { LoggerService } from './core/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {}

  getHello(): string {
    this.logger.log('calling log', 'App Service', { user: 123 });
    return 'Hello World!';
  }
}
