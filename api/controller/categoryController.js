const db = require('../models/db.connection');
const categoryModel = db.categoryModel;
const Op = db.Sequelize.Op;

const { GeneralError, NotFound, BadRequest } = require('../service/error');
const { GeneralResponse } = require('../service/response');

exports.create = (req,res,next) => {
    if(!req.body){
        next(new BadRequest('can not be empty'));
    }

    const category = {
        categoryName: req.body.categoryName,
        discription: req.body.discription
    }

    categoryModel.create(category)
    .then(category => {
        next(new GeneralResponse('Category', category))
    })
    .catch(err => {
        next(new GeneralError('Error while posting data'))
    });
}

exports.findAll =(req,res,next) => {
    categoryModel.findAll({})
    .then((category) => {
        next(new GeneralResponse('Category', category))
    }).catch((err) => {
        next(new GeneralError('Error while posting data'))
    });
}