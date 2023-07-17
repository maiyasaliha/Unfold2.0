import { Sequelize } from 'sequelize';
import sequelize from '../utils/database.js';

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
      defaultValue: true,
      allowNull: false,
   },
});

export default User;