import { Test, TestingModule } from '@nestjs/testing';
import { AiSettingsController } from './ai-settings.controller';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('AiSettingsController', () => {
  let controller: AiSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiSettingsController],
    }).compile();

    controller = module.get<AiSettingsController>(AiSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
