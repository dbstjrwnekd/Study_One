import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Content_comment } from "./Content_comment";
import { Part } from "./Part";

@Entity("Content", { schema: "StudyOne" })
export class Content extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "content_id" })
    content_id: number;

    @Column("varchar", { name: "content_name", length: 30 })
    content_name: string;

    @Column("varchar", { name: "content", length: 255 })
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @ManyToOne(
        (type) => Part,
        (part) => part.contents
    )
    part!: Part

    @OneToMany(
        (type) => Content_comment,
        (comment) => comment.content
    )
    comments!: Content_comment;
}
