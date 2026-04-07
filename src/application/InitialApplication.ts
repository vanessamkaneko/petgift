import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import MongoStore from 'connect-mongo';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { RootModule } from './di/RootModule';
import { join } from 'path';

export class InitialApplication {
  private readonly port: number = 3333;

  public async run(): Promise<void> {
    const app: NestExpressApplication =
      await NestFactory.create<NestExpressApplication>(RootModule);

    app.setGlobalPrefix('api');

    app.set('trust proxy', 1);

    app.use(
      session({
        name: 'sid', // melhor do que usar o nome padrão
        secret: process.env.SESSION_SECRET || 'super-secret-key',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
          mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/petgift',
          collectionName: 'sessions',
        }),
        cookie: {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // ou 'auto'
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
          maxAge: 1000 * 60 * 60 * 24 * 7,
        },
      }),
    );

    app.useStaticAssets(join(__dirname, '..', '..', 'uploads'), {
      prefix: '/uploads/',
    });

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
          imgSrc: ["'self'", 'data:', 'https:'],
          manifestSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          fontSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'", 'https:', 'http://localhost:5173', 'http://localhost:3333'],
          frameAncestors: ["'self'"],
          blockAllMixedContent: [],
        },
      }),
    );

    app.use((req, res, next) => {
      res.setHeader('X-XSS-Protection', '1; mode=block');
      next();
    });

    const allowedOrigins = process.env.FRONTEND_URL
      ? [process.env.FRONTEND_URL, 'http://localhost:5173']
      : ['http://localhost:5173'];

    app.enableCors({
      origin: allowedOrigins,
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