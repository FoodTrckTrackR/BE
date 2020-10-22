exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("diners")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("diners").insert([
        { username: "JohnDoe", email: "johndoe@email.com", password: "jd1234" },
        { username: "JaneDoe", email: "janedoe@email.com", password: "jd4321" },
      ]);
    });
};
