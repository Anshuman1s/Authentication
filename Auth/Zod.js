const express = require("express");
const zod = require("zod");
const app = express();
const port = 2003;
// {
//     email:string=>email
//     password :atleast 8 ByteLengthQueuingStrategy,
//     counrty:"IN" or "US"
// } 

const schema = zod.object({
    email: zod.string(),
    // password:zod.string(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US"))

})
app.use(express.json());
app.post("/validation",function(req,res){
    // const val = req.body.val;
    const response = schema.safeParse(req.body)
    if(!response.success){
        res.status(411).json({
            msg:"Invalid Input"
        })
    }else{
        res.send({
            response
        })
    }
})
app.listen(port,function(req,res){
    console.log(`Server is running on ${port}`);
    
})

