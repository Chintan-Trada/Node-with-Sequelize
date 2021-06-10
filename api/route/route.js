const express = require('express');
const router = express.Router();

const categoryController = require('../controller/categoryController');

router.get('/category', categoryController.findAll);
router.post('/category', categoryController.create);

module.exports = router