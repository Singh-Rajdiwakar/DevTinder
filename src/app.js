const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");


//create a post api for instert data in database for signup
app.post("/signup", async (req, res)=>{

    const user = new User ({
        firstName: "Singh Rajdiwakar",
        lastName: "Rajesh",
        email: "singhrajdiwakar5982@gmail.com",
        password: "rajsingh@5982",
             
    });
    try{
    await user.save();
    res.send("user signed up successfully");
    }
    catch(err){
        console.log(err);
        res.status(500).send("internal server error");
    }
});

// Connect to the database
connectDB()
.then(() => {
    console.log("Database connected successfully");
    app.listen(7777, ()=>{
    console.log("server is conneted successfully on port 7777");
});
})
.catch((err) => {
    console.error("Database connection failed:", err);
});


