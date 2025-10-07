import { Injectable } from '@nestjs/common';
import { CreateHistoryClinicDto } from './dto/create-history-clinic.dto';
import { UpdateHistoryClinicDto } from './dto/update-history-clinic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryClinic } from './entities/history-clinic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryClinicService {
  constructor(
    @InjectRepository(HistoryClinic)
    private readonly historyRepository: Repository<HistoryClinic>
  ){}
  async create(createHistoryClinicDto: CreateHistoryClinicDto) {
    const history = this.historyRepository.create(createHistoryClinicDto);
    return await this.historyRepository.save(history);
  }

  async findAll() {
    return await this.historyRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} historyClinic`;
  }
  
}
