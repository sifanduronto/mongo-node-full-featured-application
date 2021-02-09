"use strict"
const express = require('express')
const router = express.Router()
const auth = require("../../../middleware/auth")
const {createSupportTicket, getTicketById, getAllSupportTicket ,updateSupportTicketById ,getTicketBySearch} = require('../../../controllers/supportController')

router.post("/create", auth(), function (req, res) {

    createSupportTicket(req, res)
})
router.get("/:id", auth(), function (req, res) {
    getTicketById(req, res)
});
router.get("/", auth(), function (req, res) {
    getAllSupportTicket(req, res)
})

router.put("/", auth(), function (req, res) {

    updateSupportTicketById(req, res)
});

router.post("/search/", auth(), function (req, res) {

    getTicketBySearch(req, res)
});
module.exports = router
