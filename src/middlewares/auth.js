const admin = require("firebase-admin");

const serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = async (req, res, next) => {
  // agregar caso en el que no se envien los headers. devolver un error
  try {
    const jwt_token = req.headers.authorization.substring(7);
    const verify = await admin.auth().verifyIdToken(jwt_token);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = auth;
