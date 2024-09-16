const express = require("express");
const app = express();
const zod = require('zod');
const usernameSchema = zod.string()
function checkUserId(username){
    if(!username){
        
    }
}
app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

})
app.post('/signin',function(req,res){

})
app.listen(3000);
