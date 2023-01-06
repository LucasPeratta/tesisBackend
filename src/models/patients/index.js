const db = require("../../db");

const save = (patient) => {
  return db("patients").insert(patient);
};

const getAll = () => {
  return db("patients").select("*");
};

const getById = (id) => {
  return db.select("*").from("patients").where({ id: id });
};

const updateById = (id, patient) => {
  return db
    .update({
      name: patient.name,
      dni: patient.dni,
      email: patient.email,
      date: patient.date,
      emr: patient.emr,
    })
    .from("patients")
    .where({ id: id });
};

const deleteById = (id) => {
  return db.delete().from("patients").where({ id: id });
};

module.exports = { save, getAll, getById, updateById, deleteById };
