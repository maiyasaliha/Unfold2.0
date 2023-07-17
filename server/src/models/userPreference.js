import { Sequelize } from 'sequelize';
import sequelize from '../utils/database.js';

const UserPreference = sequelize.define('userpreference', {
   userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
   },
   birthday: {
      type: Sequelize.DATE,
      allowNull: true,
   },
   location: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   height: {
      type: Sequelize.DOUBLE,
      allowNull: true,
   },
   gender: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   skintone: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   faceshape: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   bodyshape: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   colourCombos: {
      type: Sequelize.STRING,
      allowNull: true,
   },
   styles: {
      type: Sequelize.STRING,
      allowNull: true,
   },
});

export default UserPreference;