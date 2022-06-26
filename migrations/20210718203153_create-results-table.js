
export function up(knex) {
    return knex.schema
      .createTable('results', function (table) {
         table.increments('id');
         table.string('student_name');
         table.string('student_grade');
         table.integer('test_id').unsigned().references('id').inTable('tests').onDelete('CASCADE').onUpdate('CASCADE');
         table.integer('score');
         table.timestamps(true, true)
      })
      
  };
  
  export function down(knex) {
    return knex.schema
        .dropTable("results");
};
