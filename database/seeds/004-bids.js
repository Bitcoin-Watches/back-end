exports.seed = function (knex) {
  return knex("bids").insert([
    { id: 1, bid: 800, bidder_id: "1", auction_id: 1 },
  ]);
};
