import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: {
      id: string;
      email: string;
      type?: 'adopter' | 'protector';
    };
  }
}
