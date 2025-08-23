import { Injectable } from "@nestjs/common";
import { User } from "src/core/user/entity/User.entity";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async comparePasswords(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }

  generateToken(user: User): string {
    return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
  }
}