import { Injectable } from '@nestjs/common';
const { PrismaClient } = require('../generated'); //ta com erro, entender como consertar depois

@Injectable()
export class UsersService {
  // Inicializa o Prisma direto no serviço, seguindo o roteiro à risca
  private prisma = new PrismaClient();

  async create(data: any) {
    // Cria o usuário no banco com os dados recebidos da rota
    const newUser = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password, // Em produção usaremos criptografia, mas para o protótipo inicial salvamos direto
        institution: data.institution,
        role: 'USER', // Valor padrão exigido pelo schema
      },
    });

    return newUser;
  }
}
