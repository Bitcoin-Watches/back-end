exports.seed = function (knex) {
  return knex("bidders").insert([
    {
      id: 1,
      handle: "rowValue1",
      twitter: "",
      telegram: "test1",
    },
    {
      id: 2,
      handle: "rowValue12",
      twitter: "test4",
      telegram: "",
    },
    {
      id: 3,
      handle: "rowValue13",
      twitter: "",
      telegram: "test13",
    },
  ]);
};
