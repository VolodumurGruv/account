
const {
  connection,
} = require("./mysqllConnection");

module.exports = (ipn) => {


  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM companies WHERE IPN=${ipn}`, (err, res) => {
      if (err) reject(new Error("Can't get any company", err));
      if (res) resolve(res);
    });

  });
};
