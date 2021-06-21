const express = require("express");
const route = require("./routes/route");

const app = express();

app.use(express.json());

// Routes
app.use((process.env.NODE_ENV === "development") ? "/user" : "/", route);

module.exports = app;
