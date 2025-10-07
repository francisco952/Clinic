import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { HistoryClinic } from 'src/history-clinic/entities/history-clinic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, HistoryClinic])],
  controllers: [DoctorController],
  providers: [DoctorService],
  exports: [TypeOrmModule]
})
export class DoctorModule {}
