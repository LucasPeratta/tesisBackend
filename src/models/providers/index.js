const db = require("../../db");

const save = (provider) => {
  return db("providers").insert(provider);
};

const getAll = () => {
  return db("providers").select("*");
};

const getById = (id) => {
  return db.select("*").from("providers").where({ id: id });
};

const updateById = (id, provider) => {
  return db
    .update({
      name: provider.name,
      phoneNumber: provider.phoneNumber,
      email: provider.email,
      shifts: provider.shifts,
    })
    .from("providers")
    .where({ id: id });
};

const deleteById = (id) => {
  return db.delete().from("providers").where({ id: id });
};

module.exports = { save, getAll, getById, updateById, deleteById };
