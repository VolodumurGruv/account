const addCompany = require("./addCompany");
const getCompanies = require("./getCompanies");

module.exports = {
  "/": getCompanies,
  "/addcompany": addCompany,
};
