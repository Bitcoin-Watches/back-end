const db = require("../database/dbConfig");

module.exports = {
  getAllBidders,
  findBy,
  addBidder,
  deleteBidder,
  updateBidder,
};

function getAllBidders() {
  return db("bidders");
}

function findBy(filter) {
  return db("bidders").where(filter);
}

function addBidder(newBidder) {
  return db("bidders").insert(newBidder);
}

function deleteBidder(id) {
  return db("bidders").where({ id }).del();
}

function updateBidder(changes, id) {
  return db("bidders").where({ id }).update(changes);
}
