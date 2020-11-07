const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const newBook = {
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
  };
  db.Book.create(newBook).then((newBook) => res.json(newBook));
});

module.exports = router;
