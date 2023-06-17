const express = require('express');
const app = express();
const path = require("path");
const router = require('../routes/route');
app.use(express.static('public'));

const templatePath = path.join (__dirname, '../templates')

app.use(express.json())
app.set("view engine","hbs");
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}));



app.use('/',router)



app.listen(3000,() =>{
    console.log("port connected")
})