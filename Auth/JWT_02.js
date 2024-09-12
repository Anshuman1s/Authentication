const jwt = require("jsonwebtoken");

// decode verify genrate
// generte => Sign
const value = {
    name:"Anshuman",
    accountNumber:123454324,

}
// jwt 

const token = jwt.sign(value,"secret");
console.log("Token is: " ,token);

