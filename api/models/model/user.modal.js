
module.exports = (sequelize, Sequelize) =>{
    const userModal = sequelize.define('user', {
        firstName:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true
        },
        lastName:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true
        },
        userName:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true
        },
        password:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true
        },
        contact:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true,
        },
        email:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true,
        }
    });
    
    return userModal;
}