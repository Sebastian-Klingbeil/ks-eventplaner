/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventList {
    @PrimaryGeneratedColumn()
    eventId: number;

    @Column()
    userName: number;
}
