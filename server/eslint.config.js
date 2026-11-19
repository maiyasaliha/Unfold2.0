import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.node },
        },
        rules: {
            // Express handlers keep the (req, res, next) signature even when unused.
            'no-unused-vars': ['error', { args: 'none' }],
        },
    },
];
