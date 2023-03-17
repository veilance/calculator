exports.up = function(knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments();
    table.string('email').unique();
    table.string('hash');
    table.string('salt');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
