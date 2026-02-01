const express = require("express");
const app = express();

// app.get("/user/:userId/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send({firstName:"Rajdiwakar", lastName:"Singh"});
// });

// app.post("/user", (req, res)=>{
//     res.send("data successfull saved in database");
// });

// app.delete("/user", (req, res)=>{
//     res.send("data successfull deleted");
// });
app.get("/user", (req, res, next)=>{
    console.log("handling the route user 1!!")
   // res.send("1 response ");
   next();
}, [(req, res, next)=>{
    console.log("handling the route user 2!!")
   // res.send("2 response ");
   next();
},(req, res, next)=>{
    console.log("handling the route user 3!!")
   // res.send("3 response ");
   next();
},(req, res, next)=>{
    console.log("handling the route user 4!!")
   // res.send("4 response ");
   next();
}],(req, res, next)=>{
    console.log("handling the route user 5!!")
   // res.send("5 response ");
   next();
},(req, res, next)=>{
    console.log("handling the route user 6!!")
   res.send("6 response ");
});



app.listen(7777, ()=>{
    console.log("server is conneted successfully on port 7777");
});