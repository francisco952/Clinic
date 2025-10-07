import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';
import { Pacient } from './entities/pacient.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PacientService {
  constructor(
    @InjectRepository(Pacient)
    private readonly pacientRepository: Repository<Pacient>
  ){}

  async create(createPacientDto: CreatePacientDto) {
    const pacient = this.pacientRepository.create(createPacientDto);
    return await this.pacientRepository.save(pacient);
  }

  async findAll() {
    return await this.pacientRepository.find();
  }

  async findOne(id: string) {
    const pacient = await this.pacientRepository.findOne({
      where: {id}
    });
    if(!pacient){
      throw new NotFoundException('Pacient not found');}
    return pacient
  }

}
