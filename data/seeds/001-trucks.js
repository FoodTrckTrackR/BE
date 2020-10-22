exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("trucks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("trucks").insert([
        {
          name: "Señor Sisig",
          cuisineType: "Filipino Fusion",
          ratings: [3, 4, 3, 2, 4],
          avgRating: 3.2,
        },
        {
          name: "Phat Thai",
          cuisineType: "Thai Food",
          ratings: [2, 4, 2, 3, 4],
          avgRating: 3,
        },
      ]);
    });
};
