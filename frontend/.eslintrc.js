module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@docusaurus/recommended',
    ],
    plugins: ['@docusaurus'],
    rules: {
        'react/prop-types': 'off',
    },
};
