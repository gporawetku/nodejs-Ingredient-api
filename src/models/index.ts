import { Sequelize } from "sequelize";
import connection from "../config";

const { database, user, password, host, logging, dialect } = connection;
const sequelize = new Sequelize(database, user, password, {
  host,
  logging,
  dialect,
});

export default sequelize;
