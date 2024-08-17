const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express(); // app - веб-сервер

app.use(cors());

app.use("/api/books", booksRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })
})

app.listen(3000);