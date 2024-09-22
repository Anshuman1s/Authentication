const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./Routes/Admin")
const userRouter = require("./Routes/User");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/Admin", adminRouter)
app.use("/User", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
