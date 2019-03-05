module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ["eslint:recommended", "react:recommended", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 6,
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        // "global-require": "off",
        // prettier
        // "prettier/prettier": "error",
        // react
        // "react/jsx-uses-vars": 1,
        // "react/jsx-uses-react": 1,
        // "react/prop-types": 2,
        // "react/display-name": 0,
        // debug
        "no-console": 0,
        "no-debug": 0
    }
};
