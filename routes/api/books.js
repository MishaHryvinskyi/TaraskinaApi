const express = require("express");

const books = require("../../books/index");

const router = express.Router();

router.get("/", async(req, res) => {
    const result = await books.getAll();
    res.json(result);
});

module.exports = router;