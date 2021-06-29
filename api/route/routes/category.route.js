const express = require('express');
const router = express.Router();

const Authentication = require('../../helper/auth.helper');
const categoryController = require('../../controller/categoryController');
const {validator} = require('../../helper/validate.helper');
const {categoryValidation} = require('../../validation/validation');


router.get('/', categoryController.findAll);
router.get('/:id', Authentication.verifyJWT, categoryController.findById);
router.post('/', Authentication.verifyJWT, validator.body(categoryValidation), categoryController.create);
router.put('/:id', Authentication.verifyJWT, validator.body(categoryValidation), categoryController.update);
router.delete('/:id', Authentication.verifyJWT, categoryController.delete);
router.delete('/', Authentication.verifyJWT, categoryController.deleteAll);

module.exports = router
