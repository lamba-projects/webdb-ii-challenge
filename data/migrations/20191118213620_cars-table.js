
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
        tbl.increments();

        tbl
            .string("VIN", 128)
            .unique()
            .notNullable();
        tbl.string("MAKE", 128).notNullable();
        tbl.string("MODEL", 128).notNullable();
        tbl.string("MILEAGE", 128).notNullable();

        tbl.string("TRANSMISSION TYPE", 128);
        tbl.string("STATUS OF TITLE", 128);
        tbl.timestamps(true, true)
     
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
