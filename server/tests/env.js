// Loaded before every test file (see "test" script): use an in-memory DB.
process.env.DATABASE_URL = 'sqlite::memory:';
process.env.JWT_SECRET = 'test-secret';
