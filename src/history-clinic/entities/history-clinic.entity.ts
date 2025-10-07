import { Doctor } from "src/doctor/entities/doctor.entity";
import { Pacient } from "src/pacient/entities/pacient.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('history-clinic')
export class HistoryClinic {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() =>Pacient, (pacient) => pacient.histories)
    @JoinColumn({name:'idPacient'})
    pacient: Pacient;
    @Column()
    idPacient:string;

    @ManyToOne(() => Doctor, (doctor) => doctor.histories)
    @JoinColumn({ name: 'idDoctor'})
    doctor: Doctor;
    @Column()
    idDoctor:string;

    @Column()
    date:Date;
    
    @Column()
    reasonConsultation:string;

    @Column()
    status:string;
    
    @Column()
    place:string;

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
}
