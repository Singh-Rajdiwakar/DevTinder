const express= require('express');

const app = express();

app.use("/raj",(req, res)=>{
    res.send("This is my real server ")
})
app.use("/jayesh",(req, res)=>{
    res.send("This is my friend ")
})
app.use("/giri",(req, res)=>{
    res.send("This is my buddy ")
})

app.listen(3000, ()=>{
    console.log("Server is Successfully Connected on port 3000...")
});