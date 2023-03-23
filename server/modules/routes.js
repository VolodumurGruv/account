const addCompany = require("./addCompany");
const getCompanies = require("./getCompanies");
const getCompany = require("./getCompany");

module.exports = {
  "/": getCompanies,
  "/addcompany": addCompany,
  "/company": getCompany,
};
