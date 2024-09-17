const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
//first function will convert it into json to string second function will verify it
const jwtPassword = "123456";
app.use(express.json());
const ALL_USERS=[{
    username:"anshumanshukla@gmail.com",
    password:"123",
    name:"Anshuman Shukla"
},
{
    username:"ankur@gmail.com",
    password:"123291",
    name:"Ankur Shukla"
},
{
    username:"gauravshukla@gmail.com",
    password:"123219",
    name:"Gaurav Shukla"
}
];
function userExists(username,password){
    let userExists = false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}
app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User Does not Exist",
        })
    }
    var token = jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })

})
app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token,jwtPassword);
        const username = decode.username;
        res.json({
            users:ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }else{
                    return true
                }
            })
        })
    }catch(err){
        return res.status(403).json({
            msg:"Invalid Token",
        })
    }
})
app.listen(3000);