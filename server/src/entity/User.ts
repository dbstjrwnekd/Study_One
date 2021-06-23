import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';


@Entity("User", { schema: "" })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
    user_id!: number;

    @Column("varchar", { name: "email", length: 255 })
    email!: string;

    @Column("varchar", { name: "nickname", length: 30 })
    nickname!: string;

    @Column("varchar", { name: "password", length: 30 })
    password!: string;

    @Column("int", { name: "role" })
    role!: number;
    
    @Column("varchar", { name: "salt", length: 30 })
    salt!: string;

    @Column("varchar", { name: "profile_url", length: 255 })
    profile_url!: string;
}