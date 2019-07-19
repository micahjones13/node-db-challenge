
exports.up = function(knex) {
  //actions, projects
  return knex.schema.createTable('actions', tbl => {
      tbl.increments(); //primary key

      tbl
      .string('action_description');
      tbl
      .text('notes');
      tbl
      .boolean('action_completed')
      .notNullable();
  })
  .createTable('projects', tbl => {
      tbl.increments();


      tbl
      .string('name', 128)
      .notNullable();
      tbl
      .text('description');
      tbl
      .boolean('completed')
      .notNullable();

      tbl
      .integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions');
};
