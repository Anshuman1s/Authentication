// You need to implement a course selling app. Make sure you setup youer own mongodb
//  instance before starting
//mongodb+srv:anshumanshukla9918:N3JbxtA9v8aK0TlL@cluster0.hqksj.mongodb.net/

const mongoose = require('mongoose');
// Connting to MongoDB
mongoose.connect('url')

// Define Schema
const AdminSchema = new mongoose.Schema({
    // schema definition here
})

const UserSchema = new mongoose.Schema({

})

const CourseSchema = new mongoose.Schema({

})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema)

module.exports={
    Admin,
    User,
    Course
}