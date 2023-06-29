const mysql = require("mysql");
const config = require("../configs");
const util = require("util");

global.db = mysql.createPool(config.DB_CONFIG);
db.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    } else if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    } else if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    } else {
      console.log(" mysqql connection err", err);
    }
  } else {
    console.log(":: MySql Connection done ::");
  }
  if (connection) connection.release();
  return;
});

// Promisify for Node.js async/await.
db.query = util.promisify(db.query).bind(db);

module.exports = async () => {
  return db;
};
