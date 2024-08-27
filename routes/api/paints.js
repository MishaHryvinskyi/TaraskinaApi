const express = require("express");

const ctrl = require("../../controllers/paints");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/paint");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;