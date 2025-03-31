import { Injectable } from '@nestjs/common';
import { CreateEventListDto } from './dto/create-event-list.dto';
import { UpdateEventListDto } from './dto/update-event-list.dto';

@Injectable()
export class EventListService {
  create(createEventListDto: CreateEventListDto) {
    return 'This action adds a new eventList';
  }

  findAll() {
    return `This action returns all eventList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventList`;
  }

  update(id: number, updateEventListDto: UpdateEventListDto) {
    return `This action updates a #${id} eventList`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventList`;
  }
}
