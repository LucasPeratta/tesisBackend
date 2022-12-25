const db = require("../../db");

const save = (paciente) => {
  return db("pacientes").insert(paciente);
};

const getAll = () => {
  return db("pacientes").select("*");
};

const getById = (id) => {
  return db.from("pacientes").where(id, id).select();
};

const updateById = (id, paciente) => {
  return db.from("pacientes").where(id, id).update({ pacientes: paciente });
};

const deleteById = (id) => {
  return db.from("pacientes").where(id, id).del();
};

module.exports = { save, getAll, getById, updateById, deleteById };
