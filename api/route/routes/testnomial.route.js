const express = require('express');
const router = express.Router();

const Authentication = require('../../helper/auth.helper');
const testnomialController = require('../../controller/testnomialController');

const {validator} = require('../../helper/validate.helper');
const {testnomialValidation} = require('../../validation/validation');

const {upload_multiple} = require('../../service/multer');

router.get('/', testnomialController.findAll)
router.get('/:id', Authentication.verifyJWT, testnomialController.findById)
router.post('/', Authentication.verifyJWT,upload_multiple, validator.body(testnomialValidation), testnomialController.create)
router.put('/:id', Authentication.verifyJWT,upload_multiple, validator.body(testnomialValidation), testnomialController.update)
router.delete('/:id', Authentication.verifyJWT, testnomialController.delete)
router.delete('/', Authentication.verifyJWT, testnomialController.deleteMultiple)


module.exports = router
