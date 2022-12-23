const { sqlite3 } = require("../containers/pacientes/sqlite3");

const addPaciente = (req, res) => {
  const paciente = req.body;
  sqlite3.save(paciente);
  res.send({ msg: "Paciente agregado con EXITO" });
};

const getPacienteById = (req, res) => {
  const id = req.params.id;
  paciente = sqlite3.getById(id);
  res.json({ msg: paciente });
};

const getAll = (req, res) => {
  res.json(sqlite3.getAll());
};

const updateById = (req, res) => {
  const id = req.paramas.id;
  const paciente = req.body;
  sqlite3.updateById(id, paciente);
  res.send({ msg: "Paciente actualizado con EXITO" });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  sqlite3.deleteById(id);
  res.send({ msg: "Paciente Eliminado con exito" });
};

module.exports = {
  addPaciente,
  getPacienteById,
  getAll,
  updateById,
  deleteById,
};
