// You need to implement a course selling app. Make sure you setup youer own mongodb
//  instance before starting
//mongodb+srv:anshumanshukla9918:N3JbxtA9v8aK0TlL@cluster0.hqksj.mongodb.net/

const mongoose = require('mongoose');
// Connting to MongoDB
mongoose.connect('mongodb+srv://anshumanshukla9918:N3JbxtA9v8aK0TlL@cluster0.hqksj.mongodb.net/course_selling_app')

// Define Schema how it will accept the format of username;
const AdminSchema = new mongoose.Schema({
    // schema definition here
    username:String,
    password:String
})

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
})
// Admin user and Course schema
const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema)

module.exports={
    Admin,
    User,
    Course
}