exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex("auction").insert([
    { id: 1, start_time: "8pm", active: true, watch_id: "1" },
    { id: 2, start_time: "8pm", active: false, watch_id: "2" },
    { id: 3, start_time: "8pm", active: false, watch_id: "3" },
  ]);
};
