const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const dateRegexp = /^\d{4}$/;

const paintSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
        match: dateRegexp,
    },
}, { versionKey: false, timestamps: true });

paintSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
    "url": Joi.string().required(),
    "name": Joi.string().required(),
    "size": Joi.string().required(),
    "year": Joi.string().pattern(dateRegexp).required()
});

const schemas = {
    addSchema,
};

const Paint = model("paint", paintSchema);

module.exports = {
    Paint, 
    schemas,
};