const express = require("express");

const db = require("../data/connection");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("operators")
    .then((operators) => {
      res.status(200).json({ data: operators });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  const user = req.body;

  db("operators")
    .insert(user)
    .then((operator) => {
      res.status(201).json(operator);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Error adding the user to the database" });
    });
});

module.exports = router;
