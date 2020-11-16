exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("watches")
    .del()
    .insert([
      {
        id: 1,
        contact: "nakamoto@bitcoin.com",
        is_loaded: "Unloaded",
        case_color: "Black",
        band_type: "Metal",
        dial_face: "Binary",
        hand_type: "Black",
      },
      {
        id: 2,
        contact: "satoshi@blockchain.com",
        is_loaded: "Unloaded",
        case_color: "Chocolate",
        band_type: "Leather",
        dial_face: "Blank",
        hand_type: "Rose",
      },
      {
        id: 3,
        contact: "johndoe@email.com",
        is_loaded: "Unloaded",
        case_color: "Rainbow",
        band_type: "Leather",
        dial_face: "Blank",
        hand_type: "Black",
      },
      {
        id: 4,
        contact: "janedoe@email.com",
        is_loaded: "Unloaded",
        case_color: "Rainbow",
        band_type: "Leather",
        dial_face: "Blank",
        hand_type: "Black",
      },
    ]);
};
