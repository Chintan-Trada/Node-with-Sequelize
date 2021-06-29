const express = require('express');
const router = express.Router();

const Authentication = require('../../helper/auth.helper');
const portfolioController = require('../../controller/portfolioController');

const {validator} = require('../../helper/validate.helper');
const {portfolioValidation} = require('../../validation/validation');

const {upload_single} = require('../../service/multer')

router.get('/', portfolioController.findAll);
router.get('/:id', Authentication.verifyJWT, portfolioController.findById);
router.post('/', Authentication.verifyJWT, upload_single, validator.body(portfolioValidation), portfolioController.create);
router.put('/:id', Authentication.verifyJWT, upload_single, validator.body(portfolioValidation), portfolioController.update);
router.delete('/:id', Authentication.verifyJWT, portfolioController.delete);
router.delete('/', Authentication.verifyJWT, portfolioController.deleteMultiple);

module.exports = router
