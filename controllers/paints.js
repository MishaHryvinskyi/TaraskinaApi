
const { Paint } = require("../models/paint");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async(req, res) => {
    const result = await Paint.find({}, "-createdAt -updatedAt");
    res.json(result);
};

const getById = async(req, res) => {
    const { id } = req.params;
    const result = await Paint.findById(id);
    if(!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const add = async(req, res) => {
    const result = await Paint.create(req.body);
    res.status(201).json(result);
};

const updateById = async(req, res) => {
    const { id } = req.params;
    const result = await Paint.findByIdAndUpdate(id, req.body, { new: true });
    if(!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const deleteById =  async(req, res) => {
    const { id } = req.params;
        const result = await Paint.findByIdAndDelete(id);
        if(!result) {
            throw HttpError(404, "Not found");
        }
        res.json({
            message: "Delete success"
    });
};

module.exports = { 
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
};