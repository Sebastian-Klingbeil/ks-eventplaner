import { PartialType } from '@nestjs/mapped-types';
import { CreateEventListDto } from './create-event-list.dto';

export class UpdateEventListDto extends PartialType(CreateEventListDto) {}
