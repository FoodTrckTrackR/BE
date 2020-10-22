const express = require("express");

const db = require("../data/connection");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("trucks")
    .then((trucks) => {
      res.status(200).json({ data: trucks });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
