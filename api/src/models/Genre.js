const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("genre", {
        id:{},
        name:{
            type: DataTypes.STRING
        },
    })
}