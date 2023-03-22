const {
  startConnection,
  connection,
  endConnection,
} = require("./mysqllConnection");

module.exports = (company) => {
  startConnection();

  const { name, account, EDRPOU, IPN } = company;

  console.log(company);

  connection.query(`SELECT * FROM companies WHERE IPN= ${IPN}`, (err, res) => {
    if (err) throw new Error(err);

    console.log(res);
    if (res) {
      return "Company already exist";
    }
  });

  connection.query(
    `INSERT INTO companies (name, account, EDRPUO, IPN)
  VALUES ("${name}", "${account}", ${EDRPOU}, ${IPN})`,
    (err, res) => {
      if (err) throw new Error("Adding company failed", err);
      console.log(`Company was added`);
    }
  );
  endConnection();
};
