import { Module } from '@nestjs/common';
import { EventListService } from './event-list.service';
import { EventListController } from './event-list.controller';

@Module({
  controllers: [EventListController],
  providers: [EventListService],
})
export class EventListModule {}
