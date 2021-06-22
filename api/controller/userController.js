const db = require('../models/db.connection');
const userModal = db.userModal;
const Op = db.Sequelize.Op;

const { GeneralError, NotFound, BadRequest } = require('../service/error');
const { GeneralResponse } = require('../service/response');

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