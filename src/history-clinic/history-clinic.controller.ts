import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryClinicService } from './history-clinic.service';
import { CreateHistoryClinicDto } from './dto/create-history-clinic.dto';
import { UpdateHistoryClinicDto } from './dto/update-history-clinic.dto';

@Controller('history-clinic')
export class HistoryClinicController {
  constructor(private readonly historyClinicService: HistoryClinicService) {}

  @Post()
  create(@Body() createHistoryClinicDto: CreateHistoryClinicDto) {
    return this.historyClinicService.create(createHistoryClinicDto);
  }

  @Get()
  findAll() {
    return this.historyClinicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyClinicService.findOne(+id);
  }
}
