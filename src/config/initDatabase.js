function createPatientTable(db) {
  return db.schema.dropTableIfExists("patients").finally(() => {
    return db.schema.createTable("patients", (table) => {
      table.increments("id").primary();
      table.string("name", 10);
      table.string("dni", 10);
      table.string("email", 20);
      table.string("dob", 20);
      table.string("emr", 20);
    });
  });
}

function createProvidersTable(db) {
  return db.schema.dropTableIfExists("providers").finally(() => {
    return db.schema.createTable("providers", (table) => {
      table.increments("id").primary();
      table.string("name", 10);
      table.string("email", 20);
      table.string("phoneNumber", 20);
      table.string("shifts", 20);
    });
  });
}

function createAppointmentsTable(db) {
  return db.schema.dropTableIfExists("appointments").finally(() => {
    return db.schema.createTable("appointments", (table) => {
      table.increments("id").primary();
      table.string("date", 10);
      table.string("time", 20);
      table.foreign("id").references("appointmentStatus");
      table.foreign("id").references("patients");
      table.foreign("id").references("providers");
    });
  });
}

function createAppointmentStatusTable(db) {
  return db.schema.dropTableIfExists("appointmentStatus").finally(() => {
    return db.schema
      .createTable("appointmentStatus", (table) => {
        table.increments("id").primary();
        table.string("status", 10);
      })
      .finally(() => {
        db("appointmentStatus")
          .insert({ status: "en espera" })
          .then(() => {});
        db("appointmentStatus").insert({ status: "en progreso" }).then();
        db("appointmentStatus").insert({ status: "finalizado" }).then();
      });
  });
}

function init(db) {
  createProvidersTable(db);
  createPatientTable(db);
  createAppointmentStatusTable(db);
  createAppointmentsTable(db);
}

module.exports = init;
