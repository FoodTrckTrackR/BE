exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("diners")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("diners").insert([
        {
          username: "JohnDoe",
          email: "johndoe@email.com",
          password: "jd1234",
          currentLocation: "42 Wallaby Way, Sydney, NSW",
          favoriteTrucks: ["Phat Thai", "Señor Sisig"],
        },
        {
          username: "JaneDoe",
          email: "janedoe@email.com",
          password: "jd4321",
          currentLocation: "1600 Pennsylvania Ave, Washington, D.C.",
          favoriteTrucks: ["Señor Sisig"],
        },
      ]);
    });
};
