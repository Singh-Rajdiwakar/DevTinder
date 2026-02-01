const express = require("express");
const app = express();

app.get("/admin/getAlldata", (req, res, next)=>{
    const token= "xsyz";
    const isAdminAuthorized = token==="xyz";

    if(isAdminAuthorized){
        res.send("all data send");
    } else {
        res.status(401).send("unauthorized reqest");
    }
});

app.delete("/admin/deletedData", (req, res, next)=>{
    const token= "xyz";
    const isAdminAuthorized = token==="xyz";

    if(isAdminAuthorized){
        res.send("all Data is deleteded success fully");
    } else {
        res.status(401).send("unauthorized reqest");
    }
});


app.listen(7777, ()=>{
    console.log("server is conneted successfully on port 7777");
});