const express = require("express");
let PORT = 3030;
let app = express();
const bodyParser = require("body-parser");

app.listen(PORT, () => {
  console.log("Server rodando na porta: " + PORT);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.send("Esta rodando mesmo 123 !");
});

//jobs routes
app.use("/jobs", require("./routes/jobs"));
