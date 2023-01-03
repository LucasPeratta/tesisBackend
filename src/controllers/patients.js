const patients = require("../models/patients");

const addPatient = (req, res) => {
  const data = req.body;
  patients
    .save(data)
    .then((id) => {
      res.json({ msg: "Patient added SUCCESSFULLY", id: id });
    })
    .catch((err) => {
      res.json({ msg: "Error, couldn't add a patient ", error: err });
    });
};

const getPatientById = (req, res) => {
  const id = req.params.id;
  patients
    .getById(id)
    .then((patient) => {
      res.json({ data: patient });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: "Error, couldn't retrieve patient with id ${id}",
        error: err,
      });
    });
};

const getAll = (req, res) => {
  patients
    .getAll()
    .then((allPatients) => {
      res.json({ pacientes: allPatients });
    })
    .catch((err) => {
      res.json({ msg: "Error, couldn't retrieve patients", error: err });
    });
};

const updatePatientById = (req, res) => {
  const id = req.params.id;
  const patient = req.body;
  patients
    .updateById(id, patient)
    .then(() => {
      res.json({ msg: "Patient updated succesfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: "Error, couldn't update patient with id ${id}",
        error: err,
      });
    });
};

const deletePatientById = (req, res) => {
  const id = req.params.id;
  patients
    .deleteById(id)
    .then(() => {
      res.json({ msg: "Patient removed successfully" });
    })
    .catch((err) => {
      res.json({ msg: "Error, couldn't delete patient" });
    });
};

module.exports = {
  addPatient,
  getPatientById,
  getAll,
  updatePatientById,
  deletePatientById,
};
