import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { Comment_comment } from "./Comment_comment";
import { Content_comment } from "./Content_comment";
import { Profile } from "./Profile";
import { Project } from "./Project";

@Entity("User", { schema: "StudyOne" })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
    user_id: number;

    @Column("varchar", { name: "email", length: 255 })
    email: string;

    @Column("varchar", { name: "nickname", length: 30 })
    nickname: string;

    @Column("varchar", { name: "password", length: 30 })
    password: string;

    @Column("int", { name: "role" })
    role: number;
    
    @Column("varchar", { name: "salt", length: 30 })
    salt: string;

    @Column("varchar", { name: "profile_url", length: 255 })
    profile_url: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    //User(1) : Project(N)
    @OneToMany(
        (type) => Project,
        (project) => project.user,
    )
    //User(1) : Content_comment(N)
    @OneToMany(
        (type) => Content_comment,
        (comment) => comment.user,
    )    
    //User(1) : Comment_comment(N)
    @OneToMany(
        (type) => Comment_comment,
        (comment_comment) => comment_comment.user,
    )
    //User(1) : Profile(N)
    @OneToMany(
        (type) => Profile,
        (profile) => profile.user,
    )
    //User(N) : Project(Study)(M)
    @ManyToMany(() => Project, {cascade: true})
    @JoinTable()
    studies!: Project[];

    projects!: Project[];
    comments!: Content_comment[];
    comment_comments!: Comment_comment[];
    profiles!: Profile[];
}
