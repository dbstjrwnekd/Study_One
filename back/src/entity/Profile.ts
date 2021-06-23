import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity("Profile", { schema: "StudyOne" })
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "profile_id" })
    profile_id: number;

    @Column("varchar", { name: "profile_name", length: 30 })
    profile_name: string;

    @Column("varchar", { name: "profile_content", length: 255 })
    profile_content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    //User(1) : Profile(N)
    @ManyToOne(
        (type) => User,
        (user) => user.profiles, { nullable: false, onDelete: 'CASCADE' }
    )
    user!: User;
}
