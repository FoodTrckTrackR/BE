exports.up = function (knex) {
  return knex.schema.createTable("diners", (tbl) => {
    tbl.increments();
    tbl.string("username").unique().notNullable();
    tbl.string("email").unique().notNullable();
    tbl.string("password").notNullable();
    tbl.string("role").notNullable();
    tbl.string("currentLocation");
    tbl.string("favoriteTrucks");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("diners");
};
