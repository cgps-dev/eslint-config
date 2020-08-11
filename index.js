module.exports = {
  "extends": [
    "airbnb-base",
    // "plugin:vue/strongly-recommended",
  ],
  "rules": {
    "array-bracket-spacing": 0,
    "arrow-body-style": 0,
    "arrow-parens": [ "error", "always" ],
    "brace-style": 0,
    "comma-dangle": [ "error", { "arrays": "always-multiline", "objects": "always-multiline", "imports": "always-multiline", "exports": "always-multiline", "functions": "ignore" } ],
    "default-case": 0,
    "func-names": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "implicit-arrow-linebreak": 0,
    "import/extensions": [ "error", { "vue": "always" } ],
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": [ "error", { "ignore": ["^~/", "/$"] } ],
    "import/prefer-default-export": 0,
    "max-classes-per-file": 0,
    "max-len": 0,
    "max-params": 0,
    "new-cap": [ "error", { "properties": false, "capIsNewExceptions": [ "Router" ] } ],
    "no-await-in-loop": 0,
    "no-console": [ "warn", { "allow": [ "info", "warn", "error" ] } ],
    "no-continue": 0,
    "no-else-return": 0,
    "no-extra-parens": 0,
    "no-loop-func": 0,
    "no-mixed-operators": 0,
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true } ],
    "no-prototype-builtins": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": [ "error", { "args": "none" } ],
    "no-useless-escape": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "padded-blocks": 0,
    "prefer-destructuring": 0,
    "quotes": [ "error", "double" ],
    "react/prefer-es6-class": 0,
    "react/prefer-stateless-function": 0,
    "spaced-comment": [ "error", "always", { "markers": ["#region"], "exceptions": ["#endregion"] } ],
    "vue/attributes-order": [ "error" ],
    "vue/order-in-components": [ "error" ],
    "vue/require-default-prop": 0,
    "vue/v-bind-style": [ "error", "longform" ],
    "vue/v-on-style": [ "error", "longform" ],
  },
};
