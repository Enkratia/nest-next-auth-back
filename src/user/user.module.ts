import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma.service';
import { AuthService } from '../auth/auth.service';

@Module({
  providers: [UserService, PrismaService, JwtService, AuthService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
