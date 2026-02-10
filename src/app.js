const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

        app.use(express.json());
//create a post api for instert data in database for signup
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


//get only one user by email
    app.get("/user", async (req, res)=>{
        const userEmail = req.body.email;
        try{
            const users = await User.find({email: userEmail});
            if(users.length===0){
                res.status(404).send("user not found");
            }else{
                res.send(users);
            }
        
        }catch(err){
                res.status(500).send("internal server error");
            }
        
    });


    //feed API - get/feed- get all the users from database

    app.get("/feed", async (req, res)=>{
       
        try{
            const allUsers = await User.find().select("-password");
            if(allUsers.length===0){
                res.status(404).send("no users found");
            }else{
                res.send(allUsers);
            }
        }catch(err){
            res.status(500).send("internal server error");
        }
    });


    // app.delete("/delete", async (req, res)=>{
    //     const userId = req.body.userId;
    //     try{
    //         const user = await User.findByIdAndDelete(userId);
    //         if(!user){
    //             res.status(404).send("user not found");
    //         }else{
    //             res.send("user deleted successfully");
    //         }
    //     }catch(err){  
    //         res.status(500).send("internal server error");
    //     }
    // });
    
    //delete a user by id
   app.delete("/user/:id", async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// update data of user from database by id

app.patch("/user/:userId", async (req, res)=>{
    const userId = req.params?.userId;
    const updateData = req.body;
    try{
        const ALLOWED_UPDATE=["firstName", "password","about","skills", "age", "gender", "phoneNumber", "photourl"];
        const requestedUpdate = Object.keys(updateData);
        const isValidUpdate = requestedUpdate.every((update) => ALLOWED_UPDATE.includes(update));
        if(!isValidUpdate){
            return res.status(500).send("invalid update");
        }
        if (updateData.skills && updateData.skills.length > 5) {
    return res.status(500).send("skills should not be more than 5");
}
          const user = await User.findByIdAndUpdate(userId, updateData,{
        returnDocument : "after",
        new : true,
        runValidators : true,
       });
       console.log(user);
        res.send("user data updated successfully");
    }catch(err){
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


