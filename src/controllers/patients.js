const patients = require("../models/patients");

const addPatient = (req, res) => {
  const data = req.body;
  patients
    .save(data)
    .then((id) => {
      res.json({ msg: "Paciente agregado con EXITO", id: id });
    })
    .catch((err) => {
      res.json({ msg: "Error al agregar paciente", err: err });
    });
};

// Modify every function bellow to work properly
const getPatientById = (req, res) => {
  const id = req.params.id;
  patient = patients.getById(id);
  res.json({ msg: patient });
};

const getAll = (req, res) => {
  res.json(patients.getAll());
};

const updatePatientById = (req, res) => {
  const id = req.paramas.id;
  const patient = req.body;
  patients.updateById(id, patient);
  res.send({ msg: "Paciente actualizado con EXITO" });
};

const deletePatientById = (req, res) => {
  const id = req.params.id;
  patients.deleteById(id);
  res.send({ msg: "Paciente Eliminado con exito" });
};

module.exports = {
  addPatient,
  getPatientById,
  getAll,
  updatePatientById,
  deletePatientById,
};
