exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("operators")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("operators").insert([
        {
          username: "JohnSmith",
          email: "johnsmith@email.com",
          password: "js1234",
          role: "operator",
          trucksOwned: ["Señor Sisig"],
        },
        {
          username: "JaneSmith",
          email: "janesmith@email.com",
          password: "js4321",
          role: "operator",
          trucksOwned: ["Phat Thai"],
        },
      ]);
    });
};
