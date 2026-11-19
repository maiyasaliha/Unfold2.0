// Entry point: connect to the database, then start listening.
import app from './app.js';
import sequelize from './src/utils/database.js';
import { PORT } from './config.js';

await sequelize.sync();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
