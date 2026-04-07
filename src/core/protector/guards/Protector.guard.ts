
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProtectorGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.session || !request.session.user) {
      throw new UnauthorizedException("User is not authenticated. Please log in first.");
    }

    const userType = request.session.user.type;

    if (userType !== 'protector') {
      throw new UnauthorizedException("Access restricted to protectors only.");
    }

    return true;
  }
}
