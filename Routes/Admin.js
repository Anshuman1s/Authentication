const {Router} = require('express');
const adminMiddleware = require('../Middleware/admin')
const router = Router();

router.post('/signup',function(req,res){

})
router.post('/courses',adminMiddleware,(req,res)=>{

})
router.get('/courses', function(req,res){

})

module.exports = router;