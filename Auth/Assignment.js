// Write a function tat takes a username and password and return JWT token with the username encoded.Should return null if the username is not a valid email or if the password is less than 6 characters.Try usinf the zod library here
// const jwt = require("jsonwebtoken");

// const jwtpassword = "secret";
// const zod = require("zod");
// const emailSchema = zod.string().email();
// const passwordSchema = zod.string().min(6);
// function SignJwt(username,password){
//     const usernameResponse = emailSchema.safeParse(username);
//     const passwordResponse = passwordSchema.safeParse(password);
//     if(!usernameResponse.success || !passwordResponse.success ){
//         return null;
//     }

//     jwt.sign({username},jwtpassword)
//     return signature;
// }
// const ans = SignJwt("anshuman@gmail.com","dkjwqhdkjqsdq");
// console.log(ans)


const jwt = require('jsonwebtoken');
const jwtpassword = "secret";
const zod = require('zod');
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username
    },jwtpassword);
    return signature;
}
const ans = signJwt("Anshumanshukla@gmail.com","129741241");
console.log(ans);

// 2nd it will decode the jwt is right or not
function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false
    }
}
const answer = decodeJwt("4108414-1");
console.log(answer);

// 3rd 
// write a function that takes a JWT as input and returns TRUE if the JWT can be VERIFIED. Return false otherwise

function verifyJwt(token){
    let ans = true;
    try{
    jwt.verify(token,jwtpassword)
    
    }catch(e){
        return false;
    }
    return ans;
    // if(verified){
    //     return true;
    // }else{
    //     return false;
    // }
}
const answ = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFuc2h1bWFuc2h1a2xhQGdtYWlsLmNvbSIsImlhdCI6MTcyNjU5NjkwOX0.1HnADZJ9IW4MnBun-aGaG0K8SNvkIiVmDhf9IDf2jFo")
console.log(answ);
