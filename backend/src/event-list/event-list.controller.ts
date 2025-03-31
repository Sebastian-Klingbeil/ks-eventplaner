import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventListService } from './event-list.service';
import { CreateEventListDto } from './dto/create-event-list.dto';
import { UpdateEventListDto } from './dto/update-event-list.dto';

@Controller('event-list')
export class EventListController {
  constructor(private readonly eventListService: EventListService) {}

  @Post()
  create(@Body() createEventListDto: CreateEventListDto) {
    return this.eventListService.create(createEventListDto);
  }

  @Get()
  findAll() {
    return this.eventListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventListDto: UpdateEventListDto) {
    return this.eventListService.update(+id, updateEventListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventListService.remove(+id);
  }
}
