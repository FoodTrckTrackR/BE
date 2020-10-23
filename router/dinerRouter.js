const express = require("express");

const db = require("../data/connection");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("diners")
    .then((diners) => {
      res.status(200).json({ data: diners });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  const user = req.body;

  db.insert(user)
    .then((diner) => {
      res.status(201).json(diner);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Error adding the new user to the database" });
    });
});

module.exports = router;
