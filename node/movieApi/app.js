const express = require("express");
const uniqid = require("uniqid");
const hbs = require("hbs");

app.use(express.json());
app.get("app/user/:id", (req, res) => {
  console.log(req.params);
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});
