import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('if0_34692434_Items', 'if0_34692434', '***REMOVED***', {
    dialect: 'mysql',
    host: 'sql208.infinityfree.com', 
    define: {
        timestamps: false
    }
});

export default sequelize;