const addCompany = require("./addCompany");
const deleteCompany = require("./deleteCompany");
const getCompanies = require("./getCompanies");
const getCompany = require("./getCompany");

module.exports = {
  "/": getCompanies,
  "/addcompany": addCompany,
  "/company": getCompany,
  "/delete": deleteCompany,
};
