// Write a function tat takes a username and password and return JWT token with the username encoded.Should return null if the username is not a valid email or if the password is less than 6 characters.Try usinf the zod library here
const jwt = require("jsonwebtoken");

const jwtpassword = "secret";
const zod = require("zod");
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
function SignJwt(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success ){
        return null;
    }

    jwt.sign({username},jwtpassword)
    return signature;
}
const ans = SignJwt("anshuman@gmail.com","dkjwqhdkjqsdq");
console.log(ans)
