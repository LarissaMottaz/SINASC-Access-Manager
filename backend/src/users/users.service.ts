import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async create(data: any) {
    const newUser = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        institution: data.institution,
        role: 'USER',
      },
    });

    return newUser;
  }
}