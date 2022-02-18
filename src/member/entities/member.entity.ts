import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Unique,
} from "typeorm";

@Entity()
@Unique(['stdCode'])
@Unique(['userId'])
@Unique(['mail'])
@Unique(['phone'])
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stdCode: number;

    @Column()
    userId: string;

    @Column()
    userPw: string;

    @Column()
    mail: string;
I
    @Column()
    phone: string;

    @CreateDateColumn()
    createdAt : string;

    @UpdateDateColumn()
    updatedAt : string;

    @DeleteDateColumn()
    deletedAt : string;
}
