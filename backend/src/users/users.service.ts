import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    // 1. Verifica se já existe um usuário com este e-mail
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('E-mail já cadastrado.');
    }

    // 2. Criptografa a senha com custo 10 (salt)
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // 3. Salva no banco PostgreSQL com a senha criptografada
  return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        institution: data.institution,
        role: 'USER',
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}