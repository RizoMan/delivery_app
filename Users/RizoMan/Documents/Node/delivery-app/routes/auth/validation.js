//Joi Validation????
const Joi = require('@hapi/joi');

//Register Validation
const registerUserValidation = body => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        lastName: Joi.string().min(6).required(),
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(body);
}

//Login Validation
const loginUserValidation = body => {
    const schema = Joi.object({
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(body);
}

module.exports.registerUserValidation = registerUserValidation;
module.exports.loginUserValidation = loginUserValidation;