module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module",
        "allowImportExportEverywhere": true,
        "ecmaFeatures": {
            "jsx": true
        },
        "rules": {}
    }
}