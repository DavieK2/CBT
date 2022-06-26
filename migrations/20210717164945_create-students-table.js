
export function up(knex) {
    return knex.schema
      .createTable('students', function (table) {
         table.increments('id');
         table.string('first_name', 255).notNullable();
         table.string('surname', 255).notNullable();
         table.string('grade', 255).notNullable();
      })
      
  };
  
  export function down(knex) {
    return knex.schema
        .dropTable("students");
};