const db = require("../database/dbConfig");

module.exports = {
  getAllAuctions,
  findBy,
  addAuction,
  removeAuction,
  updateAuction,
};

function getAllAuctions() {
  return db("auction");
}

function findBy(filter) {
  return db("auction").where(filter);
}

function addAuction(newAuction) {
  return db("auction").insert(newAuction);
}

function removeAuction(id) {
  return db("auction").where({ id }).del();
}

function updateAuction(changes, id) {
  return db("auction").where({ id }).update(changes);
}
