import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { RootModule } from './di/RootModule';

export class InitialApplication {
 private readonly port: number = 3333;

 public async run(): Promise<void> {
 const app: NestExpressApplication =
 await NestFactory.create<NestExpressApplication>(RootModule);

 app.use(helmet.dnsPrefetchControl());
 app.use(
 helmet.frameguard({
 action: 'deny',
 }),
 );
 app.use(helmet.hidePoweredBy());
 app.use(helmet.hsts());
 app.use(helmet.ieNoOpen());
 app.use(helmet.noSniff());
 app.use(helmet.permittedCrossDomainPolicies());
 app.use(helmet.referrerPolicy());

 app.use(
 helmet.contentSecurityPolicy({
 directives: {
 defaultSrc: ["'self'"],
 imgSrc: ["'self'"],
 manifestSrc: ["'self'"],
 scriptSrc: ["'self'"],
 styleSrc: ["'self'"],
 fontSrc: ["'self'"],
 frameAncestors: ["'self'"],
 blockAllMixedContent: [],
 },
 }),
 );

 app.use((req, res, next) => {
 res.setHeader('X-XSS-Protection', '1; mode=block');
 next();
 });

 const origins = [];

 app.use(function (req, res, next) {
 res.header('Access-Control-Allow-Origin', origins);
 res.header(
 'Access-Control-Allow-Headers',
 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
 );
 next();
 });

 app.enableCors({
 origin: true,
 methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
 credentials: true,
 });

 app.useGlobalPipes(
 new ValidationPipe({
 whitelist: true,
 transform: true,
 forbidNonWhitelisted: true,
 }),
 );
 app.useGlobalFilters();

 await app.listen(this.port);
 }

 public static new(): InitialApplication {
 return new InitialApplication();
 }
}