exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("watches").insert([
    {
      id: 1,
      contact: "nakamoto@blockhain.com",
      is_loaded: "Unloaded",
      case_color: "Black",
      band_type: "Metal",
      dial_face: "Binary",
      hand_type: "Black",
    },
    {
      id: 2,
      contact: "satoshi@blockhain.com",
      is_loaded: "Unloaded",
      case_color: "Chocolate",
      band_type: "Leather",
      dial_face: "Blank",
      hand_type: "Rose",
    },
  ]);
};
