
module.exports = (sequelize, Sequelize) => {
    const categoryModel = sequelize.define('categories',{
        categoryName: {
            type: Sequelize.STRING,
            allowNull : false,
            trim:true
        },
        discription: {
            type: Sequelize.STRING(1000),
            allowNull : false,
            trim:true
        }
    })
    return categoryModel;
}