const express = require("express");
const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName:"Rajdiwakar", lastName:"Singh"});
});

app.post("/user", (req, res)=>{
    res.send("data successfull saved in database");
});

app.delete("/user", (req, res)=>{
    res.send("data successfull deleted");
});



app.listen(7777, ()=>{
    console.log("server is conneted successfully on port 7777");
});