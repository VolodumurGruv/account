
const {
  connection,
} = require("./mysqllConnection");

module.exports = () => {


  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM companies", (err, res) => {
      if (err) reject(new Error("Can't get any company", err));
      if (res) resolve(res);
    });

  });
};
