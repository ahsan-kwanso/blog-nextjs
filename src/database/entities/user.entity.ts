import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Post } from "./post.entity";
import { Comment } from "./comment.entity";
import { Role } from "./role.entity";
import { BaseEntity } from "./base.entity";

@Entity({ name: "Users" })
export class User extends BaseEntity {
  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 50, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 100, nullable: false, select: false })
  password: string;

  @Column({ type: "int", nullable: false, default: 1 })
  RoleId: number;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ type: "varchar", length: 550, nullable: true })
  profilePictureUrl: string;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: "RoleId" })
  role: Role;

  @OneToMany("Post", "user")
  posts: Post[];

  @OneToMany("Comment", "user")
  comments: Comment[];
}
