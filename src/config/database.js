const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect("mongodb+srv://namstedev:p9nJ0WtBaeWQdE3F@namastenodejs.zxfsmsj.mongodb.net/devTinder");
};

module.exports = connectDB;