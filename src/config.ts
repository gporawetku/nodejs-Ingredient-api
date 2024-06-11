import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config({ path: ".env" });

const connection: any = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: process.env.NODE_ENV === "development" || process.env.LOG === "true",
  dialect: process.env.DB_DRIVER as Dialect,
};

export default connection;
