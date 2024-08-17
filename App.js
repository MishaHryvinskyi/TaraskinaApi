const express = require("express");
const books =require("./books/book");

const app = express(); // app - веб-сервер

app.use((req, res, next) => {
    next();
});

app.get("/books", (req, res) => {
    res.json(books);
});

app.use((req, res) => {
    res.status(404).json({ 
        message: "Not Found" 
    });
})

app.listen(3000);