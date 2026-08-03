import { Test, TestingModule } from '@nestjs/testing';
import { AiSettingsService } from './ai-settings.service';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('AiSettingsService', () => {
  let service: AiSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiSettingsService],
    }).compile();

    service = module.get<AiSettingsService>(AiSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
