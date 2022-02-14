import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    notiCode : number;

    @Column()
    notiName : string;

    @Column()
    type : number;

    @Column()
    title : string;
    
    @Column()
    contents : string;

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

}
