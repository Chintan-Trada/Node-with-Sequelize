const express = require('express');
const router = express.Router();

const categoryController = require('../controller/categoryController');
const portfolioController = require('../controller/portfolioController');
const testnomialController = require('../controller/testnomialController');
const enquiryController = require('../controller/enquiryController');
const userController = require('../controller/userController');

router.get('/category', categoryController.findAll);
router.get('/category/:id', categoryController.findById);
router.post('/category', categoryController.create);
router.put('/category/:id', categoryController.update);
router.delete('/category/:id', categoryController.delete);
router.delete('/category', categoryController.deleteAll);


router.get('/portfolio', portfolioController.findAll);
router.get('/portfolio/:id', portfolioController.findById);
router.post('/portfolio', portfolioController.create);
router.put('/portfolio/:id', portfolioController.update);
router.delete('/portfolio/:id', portfolioController.delete);
router.delete('/portfolio', portfolioController.deleteMultiple);

router.get('/testnomial', testnomialController.findAll)
router.get('/testnomial/:id', testnomialController.findById)
router.post('/testnomial', testnomialController.create)
router.put('/testnomial/:id', testnomialController.update)
router.delete('/testnomial/:id', testnomialController.delete)
router.delete('/testnomial', testnomialController.deleteMultiple)

router.get('/enquiry', enquiryController.findAll)
router.get('/enquiry/:id', enquiryController.findById)
router.post('/enquiry', enquiryController.create)
router.put('/enquiry/:id', enquiryController.update)
router.delete('/enquiry/:id', enquiryController.delete)
router.delete('/enquiry', enquiryController.deleteMultiple)

router.post('/users', userController.signUp);

module.exports = router