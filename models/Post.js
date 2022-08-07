const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                Model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscore: true,
        modelName: 'User',
    }
);

module.exports = Post;