import { Sequelize } from 'sequelize';
import sequelize from '../../../database/index';

const User = sequelize.define('users', {
   userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   name: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   activeUser: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
   },
   birthday: {
      type: Sequelize.DATE,
      allowNull: true,
   },
   location: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   height: {
      type: Sequelize.DOUBLE,
      allowNull: false,
   },
   gender: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   skintone: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   faceshape: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   bodyshape: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   colourCombos: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   styles: {
      type: Sequelize.STRING,
      allowNull: false,
   },
});

export default User;