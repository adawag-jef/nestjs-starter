import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

import { LoggerService } from './core/logger/logger.service';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(
    private readonly logger: LoggerService,
    private readonly databaseService: DatabaseService,
  ) {}

  async getHello() {
    this.logger.log('calling log', 'App Service', { user: 123 });
    const users = await this.databaseService.user.findMany();
    console.log(users);
    return 'Hello World!';
  }
}
