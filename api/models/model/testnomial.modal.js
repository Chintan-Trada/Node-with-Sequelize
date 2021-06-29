module.exports = (sequelize, Sequelize) =>{
    const testnomialModal = sequelize.define('testnomial', {
        clientName:{
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        feedback:{
            type: Sequelize.STRING(1000),
            allowNull: false,
            trim: true
        },
        image: {
            type: Sequelize.JSON,
            // allowNull: false
        }
    });
    
    return testnomialModal;
}