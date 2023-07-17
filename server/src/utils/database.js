import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('unfoldlogindb', 'root', '***REMOVED***', {
    dialect: 'mysql',
    host: 'localhost', 
    define: {
        timestamps: false
    }
});

export default sequelize;