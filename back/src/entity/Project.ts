import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Part } from "./Part";
import { User } from "./User";

@Entity("Project", { schema: "StudyOne" })
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "project_id" })
    project_id: number;

    @Column("varchar", { name: "project_name", length: 30 })
    project_name: string;

    @Column("varchar", { name: "project_content", length: 255 })
    project_content: string;

    @Column("varchar", { name: "project_profile", length: 255 })
    project_profile: string | undefined;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    //User(1) : Project(N)
    @ManyToOne(
        (type) => User,
        (user) => user.projects, { nullable: false, onDelete: 'CASCADE' }
    )
    user!: User;
    //Project(1) : Part(N)
    @OneToMany(
        (type) => Part,
        (part) => part.project,
    )
    parts!: Part[];
}
