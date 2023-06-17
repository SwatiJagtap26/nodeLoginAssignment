
const express=require('express');
const router=express.Router();
const collection= require("../src/mongodb")
router.get('/', (req, res) =>{
    res.render("login")
})
router.get('/signup', (req, res) =>{
    res.render("signup")
})

router.post("/signup", async(req, res) =>{
    const data ={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password,
    }
    await collection.insertMany([data]);
    res.render("home")
})

router.post("/login", async(req, res) =>{
   try{
 const check = await collection.findOne({email: req.body.email})
  if(check.password === req.body.password){
    
    res.render("home")
  }
 else{
    res.send("Wrong Password")
 }  
}
   catch{
    res.send("Wrong Details")
   }
})
module.exports = router