import { Module } from '@nestjs/common';
import { AiSettingsService } from './ai-settings.service';
import { AiSettingsController } from './ai-settings.controller';

@Module({
  providers: [AiSettingsService],
  controllers: [AiSettingsController]
})
export class AiSettingsModule {}
