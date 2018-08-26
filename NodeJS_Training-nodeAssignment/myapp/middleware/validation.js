var joi = require('joi');

const requiredSchema = {
    email: joi.string().email(),
    firstName: joi.string(),
    lastName: joi.string(),
    password: joi.string().alphanum().min(3).max(10),
}

class validate {
    validateUserData(req,res,next) {

        joi.validate({email:req.body.email, firstName:req.body.firstName,lastName:req.body.lastName,password:req.body.password}, requiredSchema,(err,value) => {
            if(err) {
            res.boom.notAcceptable(err.details[0].message);
            }
           else {
            next();
            }
         })

    }
}

module.exports= new validate();