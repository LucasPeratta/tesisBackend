const express = require("Express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init DB
const db = require("./src/db");
require("./src/config/initDatabase")(db);
// add seed file here with mock data if needed

// Routes
app.use("/", require("./src/routes/index"));

// Server
app.listen(app.get("port"), () => {
  console.log(`Server on Port:  ${app.get("port")}`);
});
