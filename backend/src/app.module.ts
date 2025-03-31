/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { EventListModule } from './event-list/event-list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ks-eventplaner',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    EventListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
