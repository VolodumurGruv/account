const { connection } = require("./mysqllConnection");

module.exports = (ipn) => {
  connection.query(`DELETE FROM companies WHERE IPN=${ipn}`, (err) => {
    if (err) throw new Error(err);
  });
};
