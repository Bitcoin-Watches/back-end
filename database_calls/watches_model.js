const db = require("../database/dbConfig");
module.exports = {
  getAllWatches,
  findBy,
};
function getAllWatches() {
  return db("watches");
}
function findBy(filter) {
  return db("watches").where(filter);
}
