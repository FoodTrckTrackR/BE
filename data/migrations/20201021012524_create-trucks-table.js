exports.up = function (knex) {
  return knex.schema.createTable("trucks", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("cuisineType").notNullable();
    tbl.integer("ratings");
    tbl.integer("avgRating");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("trucks");
};
