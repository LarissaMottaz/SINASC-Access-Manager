import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LogsModule } from './logs/logs.module';
import { AiSettingsModule } from './ai-settings/ai-settings.module';

@Module({
  imports: [UsersModule, AuthModule, LogsModule, AiSettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
