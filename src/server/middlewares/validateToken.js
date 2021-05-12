const {response} = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
     
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token missing'
        })
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET_SEED
        )
        console.log(payload)
        req.uid = payload.userId;
        req.username = payload.userName;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid Token'
        })
    }
    next();
};

module.exports = {
    validateJWT
}