import { Test, TestingModule } from '@nestjs/testing';
import { EventListService } from './event-list.service';

describe('EventListService', () => {
  let service: EventListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventListService],
    }).compile();

    service = module.get<EventListService>(EventListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
