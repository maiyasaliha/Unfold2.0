import { Sequelize } from 'sequelize';
import sequelize from '../utils/database.js';

const Outfits = sequelize.define('outfits', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    pieces: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    top: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    bottom: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    shoes: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    accessories: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    onepiece: {
        type: Sequelize.STRING,
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
    others: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    season: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    
});

export default Outfits;