exports.up = function (knex) {
  return knex.schema.createTable("operators", (tbl) => {
    tbl.increments();
    tbl.string("username").unique().notNullable();
    tbl.string("email").unique().notNullable();
    tbl.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("operators");
};
