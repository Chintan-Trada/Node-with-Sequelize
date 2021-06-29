const express = require('express');
const router = express.Router();

const Authentication = require('../../helper/auth.helper');
const userController = require('../../controller/userController');

const {validator} = require('../../helper/validate.helper');
const {userValidation, loginValidation, changePasswordValidation, forgotpasswordValidation} = require('../../validation/validation');

router.post('/', validator.body(userValidation), userController.signUp);
router.post('/login', validator.body(loginValidation), userController.logIn);
router.get('/profile',Authentication.verifyJWT,userController.profileGet);
router.put('/profile',Authentication.verifyJWT, validator.body(userValidation), userController.profileUpdate);
router.put('/changePassword', Authentication.verifyJWT, validator.body(changePasswordValidation), userController.changePassword);
router.put('/forgotPassword/:id', validator.body(forgotpasswordValidation), userController.forgotPassword);

module.exports = router
