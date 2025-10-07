import { Module } from '@nestjs/common';
import { HistoryClinicService } from './history-clinic.service';
import { HistoryClinicController } from './history-clinic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryClinic } from './entities/history-clinic.entity';

import { Doctor } from "src/doctor/entities/doctor.entity";
import { Pacient } from "src/pacient/entities/pacient.entity";

@Module({
  imports: [TypeOrmModule.forFeature([HistoryClinic, Pacient, Doctor])],
  controllers: [HistoryClinicController],
  providers: [HistoryClinicService],
  exports:[TypeOrmModule]
})
export class HistoryClinicModule {}
