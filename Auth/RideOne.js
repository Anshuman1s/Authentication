const express = require('express');
const app = express();

// function return boolean if the age is more than 14 if then return true else false;
function isOldEnough(age){
    if(age>=14){
        return true;
    
    }else{
        return false;
    }
}
app.get("/ride1",function(req,res){
    if(isOldEnough(req.query.age)){

    }
    res.json({
        "msg":"You Succesfully riden the ride"
    })
})
app.listen(3000)

// 9:28