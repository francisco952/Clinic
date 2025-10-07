import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { PacientModule } from './pacient/pacient.module';
import { HistoryClinicModule } from './history-clinic/history-clinic.module';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT as string),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        timezone: 'America/Bogota'
      }
    }),
    PacientModule, 
    HistoryClinicModule, DoctorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
