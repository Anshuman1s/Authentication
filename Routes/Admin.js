const { Router } = require("express");
const adminMiddleware = require("../Middleware/admin");
const { Admin } = require("../MongoDb");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
    // .then(function(){
    //     res.send({
    //         message:"Admin Created Successfully"
    //     })
    // }).catch(function(){
    //     res.json({
    //         messgage:"User not Created"
    //     })
    // })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    if(!course){
        res.status(401).send({
        "Messgae":"You have not Buy any course";
        
        })
    }
});

module.exports = router;