const sequelize = require('../db');
const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static async findUser1(username, password) {
        try {
            const user = await User.findByPk(username);
            if (user && user.password === password) {
                return user;
            }
            else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    static async findUser(username, password){
        try {
            const user = await User.findByPk(username)
            if(user && user.password === password){
                return user
            }else{
                return null
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

    static async getUser(username) {
        try {
            const user = await User.findByPk(username);
            return user ? user : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    static async getUsers() {
        try {
            const users = await User.findAll();
            return users ? users : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

User.init({
    // Model Attributes are defined here
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registration_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    premium: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User