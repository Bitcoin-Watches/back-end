const db = require("../database/dbConfig");

module.exports = {
  getAll,
  findBy,
  add,
  remove,
  update
}

function getAll() {
  return db("bidders");
}

function findBy(filter) {
  return db("bidders").where(filter);
}

function add(newBidder) {
  return db("bidders").insert(newBidder)
}

function remove(id) {
  return db("bidders").where({ id }).del()
}

function update(changes, id) {
  return db("bidders").where({ id }).update(changes)
}