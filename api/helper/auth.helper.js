const jwt = require('jsonwebtoken');
const config = require('../service/config');
const { UnAuthorized } = require('../service/error');

//Generate Token with user id
//pass secret ket and expiry time of token
exports.getToken = (user) => {
    return jwt.sign(user, config.SECRET_KEY ,{expiresIn: config.EXPIRY_TIME});
}

//Verify Token coming form header
exports.verifyJWT = async (req,res,next) => {
    const authHeader = await req.headers['authorization'] || req.headers['x-access-token'];

    if(authHeader){
        let token = authHeader;
        if (token.startsWith('Bearer ')) {       
            token = token.slice(7, token.length); 
        }

        jwt.verify(token, config.SECRET_KEY, (err, user) => {
            if(err){
                next(new UnAuthorized("token is not invalid"));
            }
            else{
                req.user = user;
                // console.log(req.user);
                next();
            }
        })
    }
    else{
        next(new UnAuthorized("auth token not supplied"));
    }
}