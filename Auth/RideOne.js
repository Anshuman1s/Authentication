const express = require('express');
const app = express();
// function return boolean if the age is more than 14 if then return true else false;
// This Function is like Middleware who checks eligibility of Rider 
// function isOldEnough(age){
//     if(age>=14){
//         return true;   
//     }else{
//         return false;
//     }
// }
// app.use(isOldEnoughMiddleware)
// This will use isOldEnoughMiddleware whenever reach to any route
function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg:"Sorrry You are not of age Yet",
        })
    }
}
app.get("/ride1",isOldEnoughMiddleware,function(req,res){
    
        res.json({
            msg:"You have Succesfully riden the ride 1"
        })
    
    
})
app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    // if(isOldEnough(req.query.age)){
        
    // }
    res.json({
        msg:"You have Succesfully riden the ride 2"
    })
    
})
app.listen(3000)
