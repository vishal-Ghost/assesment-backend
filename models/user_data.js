const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize,DataTypes) =>{
    const User_Data = sequelize.define('User_Data',{
        userId  :{
            type : DataTypes.INTEGER,
            field : 'USER_ID',
            primaryKey : true,
            autoIncrement : true
        },
        userName : {
            type : DataTypes.STRING,
            field : 'USER_NAME',
            unique : true
        },
        firstName : {
            type :  DataTypes.STRING,
            field : 'FIRST_NAME'
        },
        lastName : {
            type : DataTypes.STRING,
            field : 'LAST_NAME'
        },
        tempAuth : {
            type : DataTypes.STRING,
            field : 'TEMP_AUTH'
        },
        userEmail  :{
            type : DataTypes.STRING,
            field : 'USER_EMAIL'
        },
        userPass : {
            type : DataTypes.STRING,
            field : 'USER_PASS'
        },
    },{
        timestamps : false
    })
    return User_Data
}