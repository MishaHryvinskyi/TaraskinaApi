
const { Paint } = require("../models/paint");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
    try {
      // Отримуємо параметри пагінації (за замовчуванням page=1, limit=10)
      const { page = 1, limit = 10 } = req.query;
      const parsedPage = parseInt(page, 10);
      const parsedLimit = parseInt(limit, 10);
  
      // Розрахунок skip для пропуску записів
      const skip = (parsedPage - 1) * parsedLimit;
  
      // Отримуємо всі записи з урахуванням пагінації
      const paints = await Paint.find().skip(skip).limit(parsedLimit);
  
      // Загальна кількість документів
      const totalItems = await Paint.countDocuments();
  
      // Вираховуємо загальну кількість сторінок
      const totalPages = Math.ceil(totalItems / parsedLimit);
  
      res.json({
        paints,
        pagination: {
          totalItems,
          totalPages,
          currentPage: parsedPage,
          limit: parsedLimit,
        },
      });
    } catch (error) {
      next(error);
    }
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