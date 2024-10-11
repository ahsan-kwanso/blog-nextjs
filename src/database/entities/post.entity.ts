import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { BaseEntity } from "./base.entity";

@Entity({ name: "Posts" })
export class Post extends BaseEntity {
  @Column({ type: "int", nullable: false })
  UserId: number;

  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  @JoinColumn({ name: "UserId" })
  user: User;

  @Column({ type: "varchar", length: 50, nullable: false })
  title: string;

  @Column({ type: "varchar", length: 500, nullable: false })
  content: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
