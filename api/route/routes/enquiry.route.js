const express = require('express');
const router = express.Router();

const Authentication = require('../../helper/auth.helper');
const enquiryController = require('../../controller/enquiryController');

const {validator} = require('../../helper/validate.helper');
const {enquiryValidation} = require('../../validation/validation');

router.get('/', enquiryController.findAll)
router.get('/:id',Authentication.verifyJWT, enquiryController.findById)
router.post('/',Authentication.verifyJWT, validator.body(enquiryValidation), enquiryController.create)
router.put('/:id',Authentication.verifyJWT, validator.body(enquiryValidation), enquiryController.update)
router.delete('/:id',Authentication.verifyJWT, enquiryController.delete)
router.delete('/',Authentication.verifyJWT, enquiryController.deleteMultiple)

module.exports = router
