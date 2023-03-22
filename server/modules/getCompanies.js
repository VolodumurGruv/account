const { async } = require("rxjs");
const {
  startConnection,
  connection,
  endConnection,
} = require("./mysqllConnection");

module.exports = () => {
  startConnection();

  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM companies", async (err, res) => {
      if (err) reject(new Error("Can't get any company", err));
      if (res) resolve(res);
    });
    endConnection();
  });
};
