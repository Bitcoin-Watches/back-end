exports.up = function (knex) {
  return knex.schema.createTable("watches", (tbl) => {
    tbl.increments();
    tbl.string("contact", 128).notNullable();
    tbl.string("is_loaded", 128).notNullable();
    tbl.string("case_color").notNullable();
    tbl.string("band_type", 128).notNullable();
    tbl.string("dial_face", 128).notNullable();
    tbl.string("hand_type", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("watches");
};
