const db = require("../database/dbConfig");

module.exports = {
  getAll,
  findBy,
  add,
  remove,
  update
}

function getAll() {
  return db("bids");
}

function findBy(filter) {
  return db("bids").where(filter);
}

function add(newBid) {
  return db("bids").insert(newBid)
}

function remove(id) {
  return db("bids").where({ id }).del()
}

function update(changes, id) {
  return db("bids").where({ id }).update(changes)
}