import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../utils/database.js';

const Items = sequelize.define('items', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    image: {
        type: DataTypes.BLOB('medium'),
        allowNull: true,
    },
    deletedBy: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    favourite: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    colour: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    laundry: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    comments: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    length: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    material: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    style: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    neckline: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    sleeveLength: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    straptype: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    toe: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    heelheight: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    others: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    season: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    
});

export default Items;