const { Sequelize } = require("sequelize");

const db = require("../db/connection_db");

const Job = db.define("job", {
  personId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  newjob: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Job;
