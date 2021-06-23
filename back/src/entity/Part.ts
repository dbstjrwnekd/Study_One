import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Content } from "./Content";
import { Profile } from "./Profile";
import { Project } from "./Project";

@Entity("Part", { schema: "StudyOne" })
export class Part extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "part_id" })
    part_id: number;

    @Column("varchar", { name: "part_name", length: 30 })
    part_name: string;

    @Column("varchar", { name: "part_content", length: 255 })
    part_content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @ManyToOne(
        (type) => Project,
        (project) => project.parts
    )
    project!: Project;

    @OneToMany(
        (type) => Content,
        (content) => content.part,
    )
    contents!: Content[];
}
