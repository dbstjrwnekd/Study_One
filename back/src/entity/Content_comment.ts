import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Comment_comment } from "./Comment_comment";
import { Content } from "./Content";
import { User } from "./User";

@Entity("Content_comment", { schema: "StudyOne" })
export class Content_comment extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "comment_id" })
    comment_id: number;

    @Column("varchar", { name: "comment", length: 255 })
    comment: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    //User(1) : Content_comment(N)
    @ManyToOne(
        (type) => User,
        (user) => user.comments, { nullable: false, onDelete: 'CASCADE' }
    )
    user!: User;

    @ManyToOne(
        (type) => Content,
        (content) => content.comments
    )
    content!: Content;

    @OneToMany(
        (type) => Comment_comment,
        (comment_comment) => comment_comment.content_comment
    )
    comment_comments!: Comment_comment[];
}
