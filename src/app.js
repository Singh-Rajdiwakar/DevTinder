const express = require("express");
const app = express();
const { adminAuth , userAuth } = require("../middleware/auth");


app.use("/admin",adminAuth);

app.get("/admin/getAlldata", (req, res)=>{
   
        res.send("all data send");
    
});

app.use("/user",userAuth);

app.get("/user/userdata", (req, res)=>{
   
        res.send("all data send");
    
});




app.listen(7777, ()=>{
    console.log("server is conneted successfully on port 7777");
});