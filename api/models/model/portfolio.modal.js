
module.exports = (sequelize, Sequelize) => {
    const portfolioModel = sequelize.define('portfolio',{
        projectName:{
            type: Sequelize.STRING,
            allowNull: false,
            trim:true
        },
        projectCategory :{
            type: Sequelize.STRING,
            allowNull: false,
            trim:true
        },
        discription:{
            type: Sequelize.STRING(1000),
            allowNull: false,
            trim:true
        }
    })

    return portfolioModel;
}