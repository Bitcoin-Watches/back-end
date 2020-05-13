exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("watches").insert([
    {
      id: 1,
      name: "rowValue1",
      img: "test",
      description: "bitcoin watch",
      intial_cost: "4,000",
    },
    {
      id: 2,
      name: "rowValue2",
      img: "test",
      description: "bitcoin watch",
      intial_cost: "4,000",
    },
    {
      id: 3,
      name: "rowValue3",
      img: "test",
      description: "bitcoin watch",
      intial_cost: "4,000",
    },
  ]);
};
