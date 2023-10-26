const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/test", (req, res) => {
  res.send("Deu certo !");
});

router.get("/add", (req, res) => {
  res.render("add");
});

//add job via post
router.post("/add", (req, res) => {
  let { title, description, salary, company, email, newjob } = req.body;
  //inserir dados
  Job.create({
    title,
    description,
    company,
    salary,
    email,
    newjob,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
