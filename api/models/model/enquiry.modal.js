module.exports = (sequelize,Sequelize) => {
    const enquiryModal = sequelize.define('enquiry',{
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
        email:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true
        },
        mobileNo:{
            type: Sequelize.STRING,
            allowNull : false,
            trim:true
        },
        comment:{
            type: Sequelize.STRING(1000),
            allowNull : false,
            trim:true
        }
    });
     return enquiryModal;
}