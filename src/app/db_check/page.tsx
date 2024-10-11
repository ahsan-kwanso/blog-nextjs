import {
  createConnection,
  ConnectOptions,
  getConnectionManager,
} from "typeorm";
import { Role } from "@/database/entities/role.entity";
import { getRepository } from "typeorm";
import { User } from "@/database/entities/user.entity";
import { Post } from "@/database/entities/post.entity";
import { Comment } from "@/database/entities/comment.entity";

async function startApp() {
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "blogTypeORM",
    synchronize: false,
    logging: true,
    entities: [Role, User, Comment, Post],
  });
  await connection.connect();
  console.log("Connected");
  try {
    const roleRepository = getRepository(Role);
    const roles = await roleRepository.find();
    console.log(roles);
  } catch (error) {
    console.log(error);
  }
}

startApp();
