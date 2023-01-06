const providers = require("../models/providers");

const addProvider = (req, res) => {
  const data = req.body;
  providers
    .save(data)
    .then((id) => {
      res.json({ msg: "provider added SUCCESSFULLY", id: id });
    })
    .catch((err) => {
      res.json({ msg: "Error, couldn't add a provider ", error: err });
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
      res.json({
        msg: "Error, couldn't retrieve provider with id ${id}",
        error: err,
      });
    });
};

const getAll = (req, res) => {
  providers
    .getAll()
    .then((allproviders) => {
      res.json({ providers: allproviders });
    })
    .catch((err) => {
      res.json({ msg: " couldn't retrieve providers", error: err });
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
      res.json({ msg: "Error, provider updated succesfully", error: err });
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
      res.json({ msg: "Error, couldn't delete provider" });
    });
};

module.exports = {
  addProvider,
  getProviderById,
  getAll,
  updateProviderById,
  deleteProviderById,
};
