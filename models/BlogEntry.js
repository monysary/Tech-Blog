const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogEntry extends Model { }

BlogEntry.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'blog_entry'
    }
);

module.exports = BlogEntry;