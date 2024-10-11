import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Post } from "./post.entity";
import { BaseEntity } from "./base.entity";

@Entity({ name: "Comments" })
export class Comment extends BaseEntity {
  @Column({ type: "int", nullable: false })
  UserId: number;

  @Column({ type: "int", nullable: false })
  PostId: number;

  @Column({ type: "int", nullable: true })
  ParentCommentId: number;

  @ManyToOne(() => Comment, (comment) => comment.childComments, {
    onDelete: "CASCADE",
    nullable: true,
  })
  @JoinColumn({ name: "ParentCommentId" })
  parentComment: Comment;

  @Column({ type: "varchar", length: 100, nullable: false })
  content: string;

  @OneToMany(
    () => Comment,
    (childComment: Comment) => childComment.parentComment
  )
  childComments: Comment[];

  @ManyToOne("User", "comments", { nullable: false })
  @JoinColumn({ name: "UserId" })
  user: User;

  @ManyToOne("Post", "comments", {
    onDelete: "CASCADE",
    nullable: false,
  })
  @JoinColumn({ name: "PostId" })
  post: Post;
}
