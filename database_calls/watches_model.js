const db = require("../database/dbConfig");
module.exports = {
  getAllWatches,
  findBy,
  addWatches,
  deleteWatch,
  updateWatch
}

function getAllWatches() {
  return db("watches");
}

function findBy(filter) {
  return db("watches").where(filter);
}

function addWatches(newWatch) {
  return db("watches").insert(newWatch)
}

function deleteWatch(id) {
  return db("watches").where({ id }).del()
}

function updateWatch(changes, id) {
  return db("watches").where({ id }).update(changes)
}