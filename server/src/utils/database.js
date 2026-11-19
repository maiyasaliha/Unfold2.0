import { Sequelize } from 'sequelize';
import { DATABASE_URL } from '../../config.js';

const sequelize = new Sequelize(DATABASE_URL, {
    logging: false,
    define: {
        timestamps: false
    }
});

export default sequelize;
