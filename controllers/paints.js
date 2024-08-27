const paints = require("../paints/index");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async(req, res) => {
    const result = await paints.getAll();
    res.json(result);
};

const getById = async(req, res) => {
    const { id } = req.params;
    const result = await paints.getById(id);
    if(!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const add = async(req, res) => {
    const result = await paints.add(req.body);
    res.status(201).json(result);
};

const updateById = async(req, res) => {
    const { id } = req.params;
    const result = await paints.updateById(id, req.body);
    if(!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const deleteById =  async(req, res) => {
    const { id } = req.params;
        const result = await paints.deleteById(id);
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