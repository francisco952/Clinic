import { Module } from '@nestjs/common';
import { PacientService } from './pacient.service';
import { PacientController } from './pacient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pacient } from './entities/pacient.entity';
import { HistoryClinic } from 'src/history-clinic/entities/history-clinic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pacient, HistoryClinic])],
  controllers: [PacientController],
  providers: [PacientService],
  exports: [TypeOrmModule]
})
export class PacientModule {}
