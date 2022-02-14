import { LecInfo } from "src/lec-info/entities/lec-info.entity";
import { LecPlan } from "src/lec-plan/entities/lec-plan.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    subCode : string;

    @Column()
    subName : number;

    @Column()
    subProf : string;

    @Column()
    lecTime : string;

    @Column()
    class : string;
    
    @CreateDateColumn()
    createdAt : string;

    @UpdateDateColumn()
    updatedAt : string;

    @DeleteDateColumn()
    deletedAt : string;

    @OneToOne(()=>LecInfo, LecInfo=>LecInfo.subject)
    @JoinColumn()
    lecInfo : LecInfo;

    @OneToOne(()=>LecPlan, LecPlan=>LecPlan.subject)
    @JoinColumn()
    lecPlan : LecPlan;
}
