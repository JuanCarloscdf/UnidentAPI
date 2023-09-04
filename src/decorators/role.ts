import { SetMetadata } from '@nestjs/common';
import { ROLES } from 'src/constants/rol.enum';

export const ROLE_KEY = 'rol';
export const Rol = (rol: ROLES) => SetMetadata(ROLE_KEY, rol);
