const db = require('../models/db.connection');
const config = require('../service/config');
const userModal = db.userModal;
const Op = db.Sequelize.Op;

const Authentication = require('../helper/auth.helper');

const { GeneralError, NotFound, BadRequest } = require('../service/error');
const { GeneralResponse } = require('../service/response');

//Create user
exports.signUp = async (req,res,next) => {
    if(!req.body){
        next(new BadRequest('can not be empty'));
    }
    const userPost = await {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        contact: req.body.contact,
        email: req.body.email
    }
    try{
        const user = await userModal.create(userPost);
        if(user){
            next(new GeneralResponse('User', user));
        }
        else{
            next(new BadRequest('Please enter data properly'));
        }
    }
    catch(err){
        console.log(err);
        next(new GeneralError('Error while adding data..!'));
    }
}

//Login user with username and password
exports.logIn = async (req,res,next) => {
    const username = await req.body.userName;
    const password = await req.body.password;
    console.log(username)
    console.log(password)

    try{
        const userLogin = await userModal.findOne({where:{userName: username}})
        if(userLogin === null){
            next(new GeneralError('Invalid Credantial..!'));
        }
        else{
            console.log(userLogin.password)
            if(userLogin.password === password){
                const token = Authentication.getToken({id:userLogin.id});
                next(new GeneralResponse('User successfully login..!', {
                    token: token
                }, config.HTTP_SUCCESS));
            }else{
                next(new GeneralError('Invalid Credantial..!'));
            }
        }
    }
    catch(err){
        next(new GeneralError('User not found'))
    }
}

//Featching user
exports.profileGet = async (req,res,next) => {
    const id = await req.user.id;
    try{
        const profile = await userModal.findByPk(id);

        if(profile ){
            next(new GeneralResponse('Profile',profile));
        }
        else{
            next(new NotFound(`Data are not found with id =${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while updating data'));
    }
}

//Update user field's
exports.profileUpdate = async (req,res,next) => {
    const id = await req.user.id;
    try{
        const profile = await userModal.update(req.body, {where:{id:id}});

        if(profile == 1){
            next(new GeneralResponse('Profile updated'));
        }
        else{
            next(new NotFound(`Data are not found with id =${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while updating data'));
    }
}

//Change password
//First fatch old-password to the database then match password coming from database and old-password. If password are match then set new password to desired user.
exports.changePassword = async (req,res,next) => {
    const id = await req.user.id;
    try{
        const changePassword = await userModal.findByPk(id);
        if(changePassword){
            const oldPassword = await req.body.oldPassword;
            if(changePassword.password === oldPassword){
                const newPassword = await req.body.newPassword;
                const updatePassword = await userModal.update({password: newPassword}, {where:{id:id}});
                if(updatePassword){
                    next(new GeneralResponse('Password updated successfully'));
                }
                else{
                    next(new BadRequest('Password are not update'));
                }
            }
            else{
                next(new GeneralError('Your password are not match..!'));
            }
        }
        else{
            next(new NotFound(`Data are not found with id =${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while updating password'));
    }
}

//forgot password 
//First fatch username to the database then pass it's id to url
//Then fatch this id and set new password to that user.
exports.forgotPassword = async (req,res,next) => {
    const id = await req.params.id;
    try{
        const forgotPassword = await userModal.findByPk(id);
        if(forgotPassword){
            const password = await req.body.password;
            const updatePassword = await userModal.update({password: password}, {where:{id:id}});
            if(updatePassword == 1){
                next(new GeneralResponse('Password are successfully updated'));
            }
            else{
                next(new GeneralError('Data are not updated'));
            }
        }
        else{
            next(new NotFound(`Data are not found with id =${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while updating password'));
    }
}