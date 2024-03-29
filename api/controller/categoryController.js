const db = require('../models/db.connection');
const categoryModel = db.categoryModel;
const Op = db.Sequelize.Op;

const { GeneralError, NotFound, BadRequest } = require('../service/error');
const { GeneralResponse } = require('../service/response');

//Finding all data from category
exports.findAll = async (req, res, next) => {
    try {
        const category = await categoryModel.findAll();
        if (category) {
            next(new GeneralResponse('Category', category))
        }
        else {
            next(new GeneralError('Data not found'))
        }
    }
    catch (err) {
        next(new GeneralError('Error while finding data'))
    }
}

//Finding a particular data with id from category
exports.findById = async (req, res, next) => {
    let id = await req.params.id
    try {
        const category = await categoryModel.findByPk(id);
        if (category) {
            next(new GeneralResponse('Category', category))
        }
        else {
            next(new NotFound(`Data not found with id = ${id}`))
        }
    }
    catch (err) {
        next(new GeneralError('Error while finding data'))
    }
}

//Post a category
exports.create = async (req, res, next) => {
    if (!req.body) {
        next(new BadRequest('can not be empty'));
    }

    const categoryPost = await {
        categoryName: req.body.categoryName,
        discription: req.body.discription
    }
    try {
        const category = await categoryModel.create(categoryPost)
        if (category) {
            next(new GeneralResponse('Category', category))
        }
        else {
            next(new BadRequest(`Error while adding data`))
        }
    }
    catch (err) {
        next(new GeneralError('Error while adding data'))
    }
}

//Update category with id
//Featching id with url
exports.update = async (req,res,next) => {
    
    const id = await req.params.id;

    try{
        const update_category = await categoryModel.update(req.body, {where:{id: id}});
        if(update_category){
            next(new GeneralResponse('Category', update_category));
        }
        else{
            next(new NotFound(`Data not found with id = ${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while finding data'));
    }
}

//Delete category with id
//Featching id with url
exports.delete = async (req,res,next) => {
    const id = await req.params.id

    try{
        const categoryDelete = await categoryModel.destroy({where: {id: id}})

        if(categoryDelete){
            next(new GeneralResponse('Category Delete', categoryDelete));
        }
        else{
            next(new NotFound(`Data not found with id = ${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while finding data'));
    }
}

//Delete multiple category with id
//first store all id in array then pass to query
exports.deleteAll = async (req,res,next) => {
    const id = req.body.id
    try{
        const categoryDelete = await categoryModel.destroy({where: {id: id}})

        if(categoryDelete){
            next(new GeneralResponse('Category Delete', categoryDelete));
        }
        else{
            next(new GeneralError(`Data not found with id = ${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while finding data'));
    }
}