const appointments = require("../models/appointments");

const addAppointment = (req, res) => {
  const data = req.body;
  appointments
    .save(data)
    .then((id) => {
      res.json({ msg: "appointment added SUCCESSFULLY", id: id });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Error, couldn't add a appointment ", error: err });
    });
};

const getAppointmentById = (req, res) => {
  const id = req.params.id;
  appointments
    .getById(id)
    .then((appointment) => {
      res.json({ data: appointment });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: "Error, couldn't retrieve appointment with id ${id}",
        error: err,
      });
    });
};

const getAll = (req, res) => {
  appointments
    .getAll()
    .then((allappointments) => {
      res.json({ appointments: allappointments });
    })
    .catch((err) => {
      res.json({ msg: " couldn't retrieve appointments", error: err });
    });
};

const updateAppointmentById = (req, res) => {
  const id = req.params.id;
  const appointment = req.body;
  appointments
    .updateById(id, appointment)
    .then(() => {
      res.json({ msg: "appointment updated succesfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Error, Appointment updated succesfully", error: err });
    });
};

const deleteAppointmentById = (req, res) => {
  const id = req.params.id;
  appointments
    .deleteById(id)
    .then(() => {
      res.json({ msg: "appointment removed successfully" });
    })
    .catch((err) => {
      res.json({ msg: "Error, couldn't delete appointment" });
    });
};

module.exports = {
  addAppointment,
  getAppointmentById,
  getAll,
  updateAppointmentById,
  deleteAppointmentById,
};
