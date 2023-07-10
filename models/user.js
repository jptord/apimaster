const { Sequelize, DataTypes, Model } = require('sequelize');
const { Database } = require('./core/database.js');
const sequelize = new Sequelize( Database.conn );
class User extends Model {
    constructor(){
        super();
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
  sequelize, 
  modelName: 'User'
});

module.exports = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
};

//console.log(User === sequelize.models.User); 