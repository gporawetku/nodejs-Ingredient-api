"use strict";
require("dotenv/config");
const { DB_USER, DB_PASSWORD, DB_NAME, DB_Host } = process.env;
const config = {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_Host,
    dialect: "mysql",
};
module.exports = config;
