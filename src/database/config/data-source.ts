import { DataSource } from "typeorm";
import { User } from "../entities/user.entity"; // Adjust the import paths accordingly
import { Role } from "../entities/role.entity";
import { Post } from "../entities/post.entity";
import { Comment } from "../entities/comment.entity";

export const AppDataSource = new DataSource({
  type: "postgres", // or your database type
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "blogTypeORM",
  entities: [User, Role, Post, Comment],
  synchronize: false, // Set to false in production
});
