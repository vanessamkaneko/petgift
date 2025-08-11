import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class MongoDbService implements OnModuleDestroy {
 constructor(@InjectConnection() private readonly connection: Connection) {}

 async onModuleDestroy() {
 await this.connection.close();
 }

 getConnection(): Connection {
 return this.connection;
 }
}