const providers = require("../models/providers");

const addProvider = (req, res) => {
  const data = req.body;
  providers
    .save(data)
    .then((id) => {
      res.json({ msg: "provider added SUCCESSFULLY", id: id });
    })
    .catch((err) => {
      res.json({ msg: "Error, can't add a provider ", error: err });
    });
};

const getProviderById = (req, res) => {
  const id = req.params.id;
  providers
    .getById(id)
    .then((provider) => {
      res.json({ data: provider });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Error, can't get a provider", error: err });
    });
};

const getAll = (req, res) => {
  providers
    .getAll()
    .then((allproviders) => {
      res.json({ providers: allproviders });
    })
    .catch((err) => {
      res.json({ msg: "Error, can't get a providers", error: err });
    });
};

const updateProviderById = (req, res) => {
  const id = req.params.id;
  const provider = req.body;
  providers
    .updateById(id, provider)
    .then(() => {
      res.json({ msg: "provider updated succesfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Error, cannot update a provider", error: err });
    });
};

const deleteProviderById = (req, res) => {
  const id = req.params.id;
  providers
    .deleteById(id)
    .then(() => {
      res.json({ msg: "provider removed successfully" });
    })
    .catch((err) => {
      res.json({ msg: "Error, can't delete a provider" });
    });
};

module.exports = {
  addProvider,
  getProviderById,
  getAll,
  updateProviderById,
  deleteProviderById,
};
