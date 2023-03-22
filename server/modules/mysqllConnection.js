if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mysql = require("mysql");

const connectionConf = {
  host: "127.0.0.1",
  user: "root",
  password: process.env.MYSQL_PASS,
  database: "accounter",
};

const connection = mysql.createConnection(connectionConf);

const startConnection = () => {
  try {
    connection.connect((err) => {
      if (err) throw new Error("Connection start failed", err);
      console.log("DB Connected");
    });
  } catch (error) {
    console.error(error);
  }
};

const endConnection = () => {
  connection.end((err) => {
    if (err) throw new Error("Conection end failed");
    console.log("Connection is closed");
  });
};

module.exports.connection = connection;
module.exports.startConnection = startConnection;
module.exports.endConnection = endConnection;
