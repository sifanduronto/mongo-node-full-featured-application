"use strict"
const express = require('express')
const router = express.Router()
const auth = require("../../../middleware/auth")
const {getCategoryById,getAllCategory} = require('../../../controllers/categoryController')



router.get("/:id", auth(), function (req, res) {
    getCategoryById(req, res)
});

router.get("/search/:name", auth(), function (req, res) {
    getAllCategory(req, res)
});


module.exports = router
