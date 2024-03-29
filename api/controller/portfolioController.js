const db = require('../models/db.connection');
const portfolioModel = db.portfolioModel;
const Op = db.Sequelize.Op;

const { GeneralError, NotFound, BadRequest } = require('../service/error');
const { GeneralResponse } = require('../service/response');

//Finding all data from Portfolio
exports.findAll = async (req, res, next) => {
    try {
        const portfolioFindAll = await portfolioModel.findAll();

        if (portfolioFindAll) {
            next(new GeneralResponse('Portfolio', portfolioFindAll));
        }
        else {
            next(new BadRequest('Data not found'));
        }
    }
    catch (err) {
        next(new GeneralError('Error while finding data'));
    }
}

//Finding a particular data with id from Portfolio
exports.findById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const portfolioID = await portfolioModel.findByPk(id);

        if (portfolioID) {
            next(new GeneralResponse('Portfolio', portfolioID))
        }
        else {
            next(new NotFound(`Data not found with id = ${id}`))
        }
    }
    catch (err) {
        next(new GeneralError('Error while finding data'));

    }
}

//Post a Portfolio
//Upload single image
exports.create = async (req, res, next) => {
    if (!req.body) {
        next(new BadRequest('can not be empty'));
    }
    const protfolioPost = await {
        projectName: req.body.projectName,
        projectCategory: req.body.projectCategory,
        discription: req.body.discription,
        image: req.file.filename
    }

    try {
        const profolioCreate = await portfolioModel.create(protfolioPost);

        if (profolioCreate) {
            next(new GeneralResponse('Porofolio', profolioCreate));
        }
        else {
            next(new BadRequest('Enter data properly'));
        }
    }
    catch (err) {
        console.log(err)
        next(new GeneralError('Error while adding data'));

    }
}

//Update Portfolio with id
//Featching id with url
exports.update = async (req, res, next) => {
    const id = req.params.id;

    try {
        const portfolio = await portfolioModel.update(req.body, { where: { id: id } });
        if (portfolio != 0) {
            next(new GeneralResponse('Data update successfully'));
        }
        else {
            next(new NotFound(`Data not found with id = ${id}`))
        }
    }
    catch (err) {
        next(new GeneralError('Error while finding data'));

    }
}

//Delete Portfolio with id
//Featching id with url
exports.delete = async (req, res, next) => {
    const id = req.params.id;

    try {
        const portfolio = await portfolioModel.destroy({ where: { id: id } })
        if (portfolio != 0) {
            next(new GeneralResponse('Data delete successfully'));
        }
        else {
            next(new NotFound(`Data not found with id = ${id}`));
        }
    }
    catch (err) {
        let err_msg = [];
        for (let i = 0; i < err.errors.length; i++) {
            err_msg.push(err.errors[i].message);
        }
        next(new GeneralError(err_msg))
    }
}

//Delete multiple Portfolio with id
//first store all id in array then pass to query
exports.deleteMultiple = async (req, res, next) => {
    const id = await req.body.id;

    try {
        const portfolio = await portfolioModel.destroy({ where: { id: id } });
        console.log(portfolio);
        if (portfolio != 0) {
            next(new GeneralResponse('Data delete successfully'));
        }
        else {
            next(new GeneralError(`Error while deleting data`));
        }
    }
    catch (err) {
        next(new GeneralError('Error while deleting data'))
    }
}