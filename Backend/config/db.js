const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect('mongodb+srv://admin:Shubham123@cluster0.ma6za.mongodb.net/')

module.exports= {
    connection
}