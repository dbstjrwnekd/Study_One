import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import { Content_comment } from "./Content_comment";
import { User } from "./User";

@Entity("Comment_comment", { schema: "StudyOne" })
export class Comment_comment extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "comment_comment_id" })
    comment_comment_id: number;

    @Column("varchar", { name: "comment_comment", length: 255 })
    comment_comment: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    //User(1) : Comment_comment(N)
    @ManyToOne(
        (type) => User,
        (user) => user.comment_comments, { nullable: false, onDelete: 'CASCADE' }
    )
    user!: User;

    @ManyToOne(
        (type) => Content_comment,
        (content_comment) => content_comment.comment_comments
    )
    content_comment!: Content_comment;
}
