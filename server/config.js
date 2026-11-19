// Server configuration, read from environment variables (see .env.example).
import 'dotenv/config';

function required(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable ${name} (see server/.env.example)`);
    }
    return value;
}

export const DATABASE_URL = required('DATABASE_URL');
export const JWT_SECRET = required('JWT_SECRET');
export const PORT = Number(process.env.PORT) || 5000;
