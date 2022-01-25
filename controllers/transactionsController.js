const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.js");

transactions.get("/",(req, res)=>{
    res.json(transactionsArray);
    // console.log(transactionsArray);
    
});

transactions.get("/:index", (req,res)=>{
    const { index } = req.params;
    if(transactionsArray[index]) {
        res.json(transactionsArray[index]);
    } else {
        res.status(404).json({error:" Not found"});
    }
});

transactions.post("/",(req,res)=>{
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length-1]);
});

transactions.put('/:index',(req,res)=>{
    const { index } = req.params;
    transactionsArray[index]= req.body;
    res.json(transactionsArray);
});

transactions.delete("/:index",(req,res)=>{
    const { index } = req.params;
    res.json(transactionsArray.splice(index, 1));
}); 

module.exports = transactions;
