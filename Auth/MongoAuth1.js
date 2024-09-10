const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect("myURL")

const User = mongoose.model('Users',{name:String,email:String,password:String});

app.post("/signup", async function(req,res){
    const username = req.body.name;
    const password= req.body.password;
    const name = req.body.password;
    const existingUser = await User.findOne({email:username});
    // similary like findOne we have update and Delete function by passsing the value we can delete or update whatever we want
    if(existingUser){
        return res.status(400).send("USer already Exists");
    }

const user = new User({
    name:'Anshuman Shukla',
    email:"anshumanshukla@gmail.com",
    password:"1234567"
})
user.save();
res.json({
    "msg":"User Created Successfully"
})
})
app.listen(3000);
