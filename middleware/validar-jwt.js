//const { response, request} = request('express');
const jwt = require('jsonwebtoken');
const validarJWT = function (req,res,next) {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg:'no hay token en la petición'
        })
    }
    try {
        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const id = payload.id
        req.id = id;
        console.log(payload);
        //si no es válido genera un error
        next();
    }
    catch (error)  {
       console.log(error)
        res.status.json({
            msg:'token no válido'
        })
        }
    }   

module.exports = { validarJWT }
