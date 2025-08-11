import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoDbService } from './MongodbService';


@Module({
 imports: [
 MongooseModule.forRootAsync({
 imports: [ConfigModule],
 inject: [ConfigService],
 useFactory: async (configService: ConfigService) => ({
 uri: configService.get<string>('MONGODB_URI'),
 }),
 }),
 ],
 providers: [MongoDbService],
 exports: [MongoDbService],
})
export class DatabaseModule {}