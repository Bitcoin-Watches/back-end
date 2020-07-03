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
  // .createTable("auction", (tbl) => {
  //   tbl.increments();
  //   tbl.string("start_time", 128);
  //   tbl.boolean("active");
  //   tbl
  //     .integer("watch_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("watches")
  //     .onDelete("RESTRICT")
  //     .onUpdate("CASCADE");
  // })
  // .createTable("bidders", (tbl) => {
  //   tbl.increments();
  //   tbl.string("handle", 128).notNullable().unique();
  //   tbl.string("twitter", 128);
  //   tbl.string("telegram", 128);
  // })
  // .createTable("bids", (tbl) => {
  //   tbl.increments();
  //   tbl.integer("bid").notNullable().unique();
  //   tbl
  //     .integer("bidder_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("bidders")
  //     .onDelete("RESTRICT")
  //     .onUpdate("CASCADE");
  //   tbl
  //     .integer("auction_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("auction")
  //     .onDelete("RESTRICT")
  //     .onUpdate("CASCADE");
  // });
};

exports.down = function (knex) {
  return (
    knex.schema
      // .dropTableIfExists("bids")
      // .dropTableIfExists("bidders")
      // .dropTableIfExists("auction")
      .dropTableIfExists("watches")
  );
};
