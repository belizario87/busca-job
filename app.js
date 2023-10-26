const express = require("express");
const PORT = 3030;
const app = express();
const path = require("path");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const job = require("./models/Job");

app.listen(PORT, () => {
  console.log("Server rodando na porta: " + PORT);
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
  Job.findAll({ order: [["createdAt", "DESC"]] }).then((jobs) => {
    res.render("index", {
      jobs,
    });
  });
});

//jobs routes
app.use("/jobs", require("./routes/jobs"));
