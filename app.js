const express = require("express");
const app = express();
const transactionsController = require("./controllers/transactionsController.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to my budgeting app!")
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

module.exports = app;
