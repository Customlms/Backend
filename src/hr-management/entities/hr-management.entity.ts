import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class HrManagement {
    @PrimaryColumn()
    stdCode: number;

    @Column()
    position: string;

    @Column()
    name: string;

    @Column()
    birthday: string;

    @Column()
    addmission: string;

    @CreateDateColumn()
    createdAt : string;

    @UpdateDateColumn()
    updatedAt : string;

    @DeleteDateColumn()
    deletedAt : string;
}
