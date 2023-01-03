const db = require("../../db");

const save = (appointment) => {
  return db("appointments").insert(appointment);
};

const getAll = () => {
  return db("appointments").select("*");
};

const getById = (id) => {
  return db.select("*").from("appointments").where({ id: id });
};

const updateById = (id, appointment) => {
  return db
    .update({
      date: appointment.date,
      time: appointment.time,
    })
    .from("appointments")
    .where({ id: id });
};

const deleteById = (id) => {
  return db.delete().from("appointments").where({ id: id });
};

module.exports = { save, getAll, getById, updateById, deleteById };
