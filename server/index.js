const runServer = require("./modules/server");
const {
  startConnection,
  endConnection,
} = require("./modules/mysqllConnection");

runServer();
startConnection();
