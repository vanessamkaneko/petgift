import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import { CacheModule } from '@nestjs/cache-manager';
import { DatabaseModule } from '../../infrastructure/db/mongodb/DatabaseModule';
import { GlobalExceptionFilter } from '../api/global-exception/global.exception';
import { HealthCheckController } from '../operation/controllers/healthCheck/HealthCheckController';
import { AdopterModule } from './AdopterModule';
import { ProtectorModule } from './ProtectorModule';
import { PetModule } from './PetModule';
import { UserModule } from './UserModule';


import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'frontend', 'dist'),
      exclude: ['/api*'],
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    AdopterModule,
    ProtectorModule,
    PetModule
  ],
  controllers: [HealthCheckController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class RootModule { }