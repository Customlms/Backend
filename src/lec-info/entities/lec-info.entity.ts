import { Subject } from "src/subject/entities/subject.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class LecInfo {
    @PrimaryGeneratedColumn()
    subCode : string;

    @Column()
    notiTitle : string;

    @Column()
    writer : string;

    @Column()
    postedDate : string;

    @CreateDateColumn()
    createdAt : string;

    @UpdateDateColumn()
    updatedAt : string;

    @DeleteDateColumn()
    deletedAt : string;

    @OneToOne(()=>Subject, subject=>subject.lecInfo)
    subject : Subject;
}
