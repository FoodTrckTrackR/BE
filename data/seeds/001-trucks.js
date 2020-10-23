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
          menu: [
            {
              itemName: "The Señor Sisig Burrito",
              itemDescription:
                "Adobo garlic rice, pinto beans, lettuce, pico de gallo & cilantro cream sauce",
              itemPhotos: ["img/burrito.png"],
              itemPrice: 10.0,
              customerRatings: [3, 4, 3, 3, 2],
              customerRatingAvg: 3,
            },
          ],
          currentLocation: {
            location: "Sydney, NSW",
            departureTime: {
              date: "10-24-2020",
              time: "9:00PM",
            },
          },
        },
        {
          name: "Phat Thai",
          cuisineType: "Thai Food",
          ratings: [2, 4, 2, 3, 4],
          avgRating: 3,
          menu: [
            {
              itemName: "Pad Thai",
              itemDescription:
                "Fresh stir-fried rice noodles with original homemade pad thai sauce",
              itemPhotos: ["img/padthai.png"],
              itemPrice: 12.0,
              customerRatings: [3, 4, 2, 3, 2],
              customerRatingAvg: 2.8,
            },
          ],
          currentLocation: {
            location: "Washington, D.C.",
            departureTime: {
              date: "10-31-2020",
              time: "9:00PM",
            },
          },
        },
      ]);
    });
};
