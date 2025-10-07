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

@Entity('doctor')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  identification:string;

  @Column()
  name:string;

  @Column()
  speciality:string;
  @Column()
  range:string;
  @Column()
  phone:string;

  @Column('text',{ nullable: true})
  directions:string;

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

  @OneToMany(() => HistoryClinic, (history) => history.idDoctor)
  histories:HistoryClinic[];

}
