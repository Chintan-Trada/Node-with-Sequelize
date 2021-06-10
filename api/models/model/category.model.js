
module.exports = (sequelize, Sequelize) => {
    const categoryModel = sequelize.define('categories',{
        categoryName: {
            type: Sequelize.STRING
        },
        discription: {
            type: Sequelize.STRING(1000)
        }
    })
    return categoryModel;
}