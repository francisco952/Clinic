import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository : Repository<Doctor>
  ){}
  async create(createDoctorDto: CreateDoctorDto) {
    const doctor = this.doctorRepository.create(createDoctorDto);
    return await this.doctorRepository.save(doctor)
  }

  async findAll() {
    return await this.doctorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }
}
