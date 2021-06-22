const db = require('../models/db.connection');
const enquiryModel = db.enquiryModel;
const Op = db.Sequelize.Op;

const { GeneralError, NotFound, BadRequest } = require('../service/error');
const { GeneralResponse } = require('../service/response');

exports.findAll = async (req,res,next) => {
    try{
        const enquiry = await enquiryModel.findAll();

        if(enquiry){
            next(new GeneralResponse('Enquiry', enquiry));
        }
        else{
            next(new BadRequest('Data are not found..!'));
        }
    }
    catch(err){
        next(new GeneralError('Data are not found'))
    }
}

exports.findById = async (req,res,next) => {
    const id = await req.params.id;

    try{
        const enquiry = await enquiryModel.findByPk(id);
        if(enquiry){
            next(new GeneralResponse('Enquiry', enquiry));
        }
        else{
            next(new NotFound(`Data are not found with id = ${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while finding data..!'))
    }
}

exports.create = async (req,res,next) => {
    const enquiryPost = await{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        comment: req.body.comment
    }
    try{
        const enquiry = await enquiryModel.create(enquiryPost);
        if(enquiry){
            next(new GeneralResponse('Enquiry', enquiry));
        }
        else{
            next(new BadRequest('Data are not added..!'));
        }
    }
    catch(err){
        next(new GeneralError('Error while adding data..!'));
    }
}

exports.update = async (req,res,next) => {
    const id = await req.params.id;

    try{
        const enquiry = await enquiryModel.update(req.body,{where:{id:id}});
        
        if(enquiry == 1){
            next(new GeneralResponse('Data update successfully'));
        }
        else{
            next(new NotFound(`Data are not founf with id =${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while finding data..!'));
    }
}

exports.delete = async (req,res,next) => {
    const id = await req.params.id;

    try{
        const enquiry = await enquiryModel.destroy({where:{id:id}});
        if(enquiry == 1){
            next(new GeneralResponse('Data delete successfully'));
        }
        else{
            next(new NotFound(`Data are not found with id =${id}`));
        }
    }
    catch(err){
        next(new GeneralError('Error while deleting data..!'))
    }
}

exports.deleteMultiple = async (req,res,next) => {
    const id = req.body.id;

    try{
        const enquiry = await enquiryModel.destroy({where:{id:id}});

        if(enquiry){
            next(new GeneralResponse('Data delete successfully'));
        }
        else{
            next(new NotFound('Data are not found'));
        }
    }
    catch(err){
        next(new GeneralError('Error while deleting data..!'));
    }
}