import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly prisma: PrismaService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    
    const { method, url } = request;
    const user = request.user;

    // Converte o userId para número (Int), se existir
    const rawUserId = user?.userId || user?.sub || user?.id;
    const parsedUserId = rawUserId ? Number(rawUserId) : null;

    return next.handle().pipe(
      tap(async () => {
        try {
          await this.prisma.routeAccessLog.create({
            data: {
              route: url,
              method: method,
              status: response.statusCode, // Grava o status HTTP (ex: 200, 201, 404)
              userId: parsedUserId && !isNaN(parsedUserId) ? parsedUserId : null,
            },
          });
        } catch (error) {
          console.error('Erro ao salvar log de acesso:', error);
        }
      }),
    );
  }
}