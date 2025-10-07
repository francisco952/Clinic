import { HistoryClinic } from 'src/history-clinic/entities/history-clinic.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('pacient')
export class Pacient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  identification:string;

  @Column()
  name:string;

  @Column()
  phone:string;

  @Column('text',{ nullable: true})
  directions:string;

  @Column()
  bloodType:string;

  @Column()
  age:string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  
  @OneToMany(() => HistoryClinic, (history) => history.idPacient)
  histories:HistoryClinic[];
}
