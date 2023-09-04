import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES } from 'src/constants/rol.enum';
import { ROLE_KEY } from 'src/decorators/role';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.getAllAndOverride<ROLES>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log(requiredRole);
    if (!requiredRole) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log(user);
    return user.user.rol === requiredRole;
  }
}
