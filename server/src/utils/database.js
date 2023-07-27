import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('u100872040_ufdb', 'u100872040_unfold_user', '***REMOVED***', {
    dialect: 'mysql',
    host: '185.210.145.52', 
    define: {
        timestamps: false
    }
});

export default sequelize;