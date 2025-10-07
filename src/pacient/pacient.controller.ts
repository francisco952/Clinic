import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacientService } from './pacient.service';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';

@Controller('pacient')
export class PacientController {
  constructor(private readonly pacientService: PacientService) {}

  @Post()
  create(@Body() createPacientDto: CreatePacientDto) {
    return this.pacientService.create(createPacientDto);
  }

  @Get()
  findAll() {
    return this.pacientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacientService.findOne(id);
  }

}
