const {DataTypes, UUIDV4} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('genre', {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
            
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}