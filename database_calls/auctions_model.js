const db = require("../database/dbConfig");

module.exports = {
  getAll,
  findBy,
  add,
  remove,
  update
}

function getAll() {
  return db("auction");
}

function findBy(filter) {
  return db("auction").where(filter);
}

function add(newAuction) {
  return db("auction").insert(newAuction)
}

function remove(id) {
  return db("auction").where({ id }).del()
}

function update(changes, id) {
  return db("auction").where({ id }).update(changes)
}