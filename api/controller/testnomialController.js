const db = require('../models/db.connection');
const testnomialModel = db.testnomialModel;
const Op = db.Sequelize.Op;

const { GeneralError, NotFound, BadRequest } = require('../service/error');
const { GeneralResponse } = require('../service/response');

//Finding all data from Testnomial
exports.findAll = async (req,res,next) => {
    try{
        const testnomial = await testnomialModel.findAll();
        if(testnomial){
            next(new GeneralResponse('Testnomial', testnomial));
        }
        else{
            next(new NotFound('Data are not found..!'))
        }
    }
    catch(err){
        next(new BadRequest('Error while finding data..!'));
    }
}

//Finding a particular data with id from Testnomial
exports.findById = async (req,res,next) => {
    const id= await req.params.id;

    try{
        const testnomial = await testnomialModel.findByPk(id);

        if(testnomial){
            next(new GeneralResponse('Testnomial', testnomial));
        }
        else{
            next(new NotFound(`Data are not found with id = ${id}`));
        }

    }
    catch(err){
        next(new BadRequest('Error while finding data..!'))
    }
}

//Post a Testnomial
//Upload multiple images 
//First store all image in array then pass it to desired field
exports.create = async (req,res,next) => {
    if(!req.body){
        next(new BadRequest('can not be empty'));
    }
    let image = [];
    for (let i = 0; i < req.files.length; i++) {
        image.push(req.files[i].filename)
    }
    const testnomialPost = await {
        clientName: req.body.clientName,
        feedback: req.body.feedback,
        image: image
    }
    try{
        const testnomial = await testnomialModel.create(testnomialPost);
        if(testnomial){
            next(new GeneralResponse('Testnomial', testnomial));
        }
        else{
            next(new BadRequest('Please enter data properly'));
        }
    }
    catch(err){
        console.log(err)
        next(new GeneralError('Error while adding data..!'));
    }
}

//Update Testnomial with id
//Featching id with url
exports.update = async (req,res,next) => {
    const id = await req.params.id;

    try{
        const testnomial = await testnomialModel.update(req.body, {where:{id:id}});

        if(testnomial == 1){
            next(new GeneralResponse('Data update successfully'));
        }
        else{
            next(new NotFound(`Data are not found with id =${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while updating data..!'))
    }
}
//Delete Testnomial with id
//Featching id with url
exports.delete = async (req,res,next) => {
    const id = await req.params.id;

    try{
        const testnomial = await testnomialModel.destroy({where:{id:id}});

        if(testnomial == 1){
            next(new GeneralResponse('Data deleting successfully'));
        }
        else{
            next(new NotFound(`Data are not found with id = ${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while deleting data..!'))
    }
}

//Delete multiple Testnomial with id
//first store all id in array then pass to query
exports.deleteMultiple = async (req,res,next) => {
    const id = await req.body.id;

    try{
        const testnomial = await testnomialModel.destroy({where:{id:id}});
        
        if(testnomial ){
            next(new GeneralResponse('Data delete successfully'));
        }
        else{
            next(new NotFound(`Data are not found..!`));
        }
    }
    catch(err){
        next(new GeneralError('Error while deleting data..!'))
    }
}