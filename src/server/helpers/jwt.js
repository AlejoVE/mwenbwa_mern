const jwt = require('jsonwebtoken');

const generateJWT = (userId, userName) => {
    
    return new Promise((resolve, reject) =>{

        const payload = {userId, userName};

        jwt.sign(payload, process.env.JWT_SECRET_SEED, {
            expiresIn : '30d'
        }, (err, token) =>{

            if(err){
                console.log(err);
                reject('Token not generated');
            }

            resolve(token)
        })
    })
}


module.exports = {generateJWT};

