import { Subject } from "src/subject/entities/subject.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class LecPlan {
    @PrimaryGeneratedColumn()
    class : string;

    @Column()
    subName : string;
    
    @Column()
    subCode : string;

    @Column()
    prof : string;

    @Column()
    major : string;

    @Column()
    credits : string;

    @Column()
    lecTime : string;

    @CreateDateColumn()
    createdAt : string;

    @UpdateDateColumn()
    updatedAt : string;

    @DeleteDateColumn()
    deletedAt : string;

    @OneToOne(()=>Subject, subject=>subject.lecPlan)
    subject : Subject;

}
