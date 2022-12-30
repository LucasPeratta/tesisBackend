function createPatientTable(db) {
  return db.schema.dropTableIfExists("patients").finally(() => {
    return db.schema.createTable("patients", (table) => {
      table.increments("id").primary();
      table.string("name", 10);
      table.string("dni", 10);
      table.string("email", 20);
      table.string("date", 20);
      table.string("emr", 20);
    });
  });
}

function createAppointmentsTable(db) {
  return db.schema.dropTableIfExists("appointmentss").finally(() => {
    return db.schema.createTable("appointmentss", (table) => {
      table.increments("id").primary();
      table.ENUM("status");
      table.string("date", 20);
      table.time("time", 20);
    });
  });
}

function init(db) {
  createPatientTable(db);
  createAppointmentsTable(db);
}

module.exports = init;
