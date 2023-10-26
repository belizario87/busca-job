const express = require("express");
const PORT = 3030;
const app = express();
const path = require("path");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const job = require("./models/job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const portApp = 3030;

app.listen(portApp, () => {
  console.log(`The app is listening on port ${portApp}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static folder
app.use(express.static(path.join(__dirname, "public")));

//routes
app.get("/", (req, res) => {
  let search = req.query.job;
  let query = "%" + search + "%";

  if (!search) {
    job
      .findAll({ order: [["createdAt", "DESC"]] })
      .then((jobs) => {
        res.render("index", { jobs });
      })
      .catch((error) => {
        console.log(`An error occurs: ${error}`);
      });
  } else {
    job
      .findAll({
        where: { title: { [Op.like]: query } },
        order: [["createdAt", "DESC"]],
      })
      .then((jobs) => {
        res.render("index", { jobs, search });
      })
      .catch((error) => {
        console.log(`An error occurs: ${error}`);
      });
  }
});

//jobs routes
app.use("/jobs", require("./routes/jobs"));
