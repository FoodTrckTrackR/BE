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

module.exports = router;
