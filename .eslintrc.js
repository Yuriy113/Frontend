module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        // 'standard-with-typescript',
        // 'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-indent': [2, 4],
        semi: 'off',

        'no-extra-semi': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/indent': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        "@typescript-eslint/member-delimiter-style": ["error", {
            multiline: {
              delimiter: 'semi',    // 'none' or 'semi' or 'comma'
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',    // 'semi' or 'comma'
              requireLast: true,
            },
          }]
    },
    ignorePatterns: ['.eslint.js'],
};
