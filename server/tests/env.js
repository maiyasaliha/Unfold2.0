// Loaded before every test file (see "test" script).
// Uses in-memory SQLite unless TEST_DATABASE_URL points at a real database.
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL || 'sqlite::memory:';
process.env.JWT_SECRET = 'test-secret';
