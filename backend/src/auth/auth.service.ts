import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    // 1. Busca usuário pelo e-mail
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Dados inválidos.');
    }

    // 2. Compara a senha informada com o hash salvo no PostgreSQL
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Dados inválidos.');
    }

    // 3. Monta o Payload do JWT (sem a senha!)
    const payload = { sub: user.id, email: user.email, role: user.role };

    // 4. Retorna o Token assinado
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}
