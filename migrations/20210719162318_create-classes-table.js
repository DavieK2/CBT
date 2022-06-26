
export function up(knex) {
    return knex.schema
      .createTable('classes', function (table) {
         table.increments('id');
         table.string('class_name');
         table.timestamps(true, true)
      })
      
  };
  
  export function down(knex) {
    return knex.schema
        .dropTable("classes");
};
