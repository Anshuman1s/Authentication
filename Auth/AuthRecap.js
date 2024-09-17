const jwt = require('jsonwebtoken');
// decode , verify , sign ;

const value = {
    name:"Anshuman",
    accountNumber:987654321
}
// jwt 
const token = jwt.sign(value,"Secret");
console.log(token)
// No one can copy this can recreate it whenever they try they willl get another token access denied
// const content = {
//   "name": "Anshuman",
//   "accountNumber": 987654321,
//   "iat": 1726591350
// }

// const newToken = jwt.sign(content,"secret")
// console.log(newToken);

// while Verify

const VerifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5zaHVtYW4iLCJhY2NvdW50TnVtYmVyIjo5ODc2NTQzMjEsImlhdCI6MTcyNjU5MTY3OH0.1veFRhFRFeQabCasFrx6qlHrikgW-0glYECoZXoXrBE","secret");
console.log(VerifyToken);

