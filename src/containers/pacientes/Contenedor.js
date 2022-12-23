class Contenedor {
  constructor(config) {
    this.knex = require("knex")(config);
    this.crearTabla();
  }

  crearTabla() {
    return this.knex.schema.dropTableIfExists("pacientes").finally(() => {
      return this.knex.schema.createTable("pacientes", (table) => {
        table.increments("id").primary();
        table.string("name", 10);
        table.string("dni", 10);
        table.string("email", 20);
        table.string("date", 20);
        table.string("emr", 20);
      });
    });
  }

  save(paciente) {
    return this.knex("pacientes").insert(paciente);
  }

  getAll() {
    return this.knex("pacientes").select("*");
  }

  getById(id) {
    return this.knex.from("pacientes").where(id, id).select();
  }

  updateById(id, paciente) {
    return this.knex
      .from("pacientes")
      .where(id, id)
      .update({ pacientes: paciente });
  }

  deleteById(id) {
    return this.knex.from("pacientes").where(id, id).del();
  }

  close() {
    this.knex.destroy();
  }
}

module.exports = Contenedor;
