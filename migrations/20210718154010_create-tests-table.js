
export function up(knex) {
    return knex.schema
      .createTable('tests', function (table) {
         table.increments('id');
         table.string('title', 255).notNullable();
         table.string('instructions', 255).notNullable();
         table.string('test_path', 255).notNullable();
      })
      
  };
  
  export function down(knex) {
    return knex.schema
        .dropTable("tests");
};