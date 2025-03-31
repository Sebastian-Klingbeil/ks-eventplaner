import { Test, TestingModule } from '@nestjs/testing';
import { EventListController } from './event-list.controller';
import { EventListService } from './event-list.service';

describe('EventListController', () => {
  let controller: EventListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventListController],
      providers: [EventListService],
    }).compile();

    controller = module.get<EventListController>(EventListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
