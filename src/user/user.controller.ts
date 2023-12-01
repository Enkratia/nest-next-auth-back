import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
// import { RefreshJwtGuard } from '../auth/guards/refresh.guard';
// import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
}
