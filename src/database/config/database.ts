import "dotenv/config";
import { Dialect, Options } from "sequelize";

const { DB_USER, DB_PASSWORD, DB_NAME, DB_Host } = process.env;

const config: Options = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_Host,
  dialect: "mysql" as Dialect,
};

export = config;
