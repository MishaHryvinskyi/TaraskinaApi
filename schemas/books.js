const Joi = require("joi");

const addSchema = Joi.object({
    "url": Joi.string().required(),
    "name": Joi.string().required(),
    "size": Joi.string().required(),
    "year": Joi.string().required()
});

module.exports = {
    addSchema,
}