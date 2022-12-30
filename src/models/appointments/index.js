const db = require("../../db");

const save = (appointment) => {
  return db("appointments").insert(appointment);
};

const getAll = () => {
  return db("appointments").select("*");
};

const getById = (id) => {
  return db.from("appointments").where(id, id).select();
};

const updateById = (id, appointment) => {
  return db
    .from("appointments")
    .where(id, id)
    .update({ appointments: appointment });
};

const deleteById = (id) => {
  return db.from("appointments").where(id, id).del();
};

module.exports = { save, getAll, getById, updateById, deleteById };
