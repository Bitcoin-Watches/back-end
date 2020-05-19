const db = require("../database/dbConfig");

module.exports = {
  getAllBids,
  findBy,
  addBid,
  removeBid,
  updateBid,
};

function getAllBids() {
  return db("bids");
}

function findBy(filter) {
  return db("bids").where(filter);
}

function addBid(newBid) {
  return db("bids").insert(newBid);
}

function removeBid(id) {
  return db("bids").where({ id }).del();
}

function updateBid(changes, id) {
  return db("bids").where({ id }).update(changes);
}
