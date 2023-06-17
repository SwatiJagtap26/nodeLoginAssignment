const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/login")
.then(()=>{
    console.log("MongoDB Connected")
})
.catch(()=>{
    console.log("Failed To Connect")
})

const LoginSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = new mongoose.model("Collection1",LoginSchema);
module.exports =collection