const express = require("express");
const cors = require("cors");
const paintsRouter = require("./routes/api/paints");
require("dotenv").config();

const app = express(); // app - веб-сервер

app.use(cors());
app.use(express.json());

app.use("/api/paints", paintsRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.connect(DB_HOST)
.then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}))
.catch(error => {
    console.log(error.message);
    process.exit(1);
});