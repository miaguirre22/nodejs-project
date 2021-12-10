const res = require("express/lib/response");
const db = require("../config/db.config");

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
    [data.firstName, data.lastName, data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful!`);
    }
  );
};

exports.login = (data, callback) => {
  db.query(
    `SELECT * FROM users WHERE emailId = ? AND password = ?`,
    [data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.id) {
        return callback(null, "Login success!");
      } else {
        return callback(null, "Invalid credetial!");
      }
    }
  );
};
