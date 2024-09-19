const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require("./Routes/Admin");
const userRouter = require('./Routes/User');
\;
app.use(bodyParser.json());
app.use("/Admin",adminRouter);
app.use("/User",userRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})