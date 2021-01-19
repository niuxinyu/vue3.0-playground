module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    // parser: "@typescript-eslint/parser"
    // 这是原来的配置 但是在vue文件内会报错
    // 所以将配置替换为 vue-eslint-parser，并且将 @typescript-eslint/parser 放到 parserOptions 配置内
    plugins: ['@typescript-eslint'],
    rules: {
        'object-curly-spacing': [2, 'always'],
        'space-before-blocks': 2,
        'no-irregular-whitespace': 2, //不规则的空白不允许
        'no-trailing-spaces': 2, //一行结束后面有空格就发出警告
        'semi': [2, 'always'], //语句强制分号结尾
        'space-before-function-paren': 2, //
        'eol-last': 'error', // 要求文件末尾保留一行空行
        'brace-style': ['error', 'stroustrup'], // if else 等语句的换行规则 报错 必须换行,
        'camelcase': 0, // 非必须驼峰
        'no-unused-vars': 0, // 允许声明不使用
        // ts
        '@typescript-eslint/no-var-requires': 0, // 允许在ts内使用var和require 
        '@typescript-eslint/ban-ts-ignore': 0, // 允许 @ts-ignore
        '@typescript-eslint/camelcase': 0, // 非必须驼峰
        '@typescript-eslint/no-explicit-any': 0, // 允许any
        '@typescript-eslint/no-unused-vars': 0, // 允许声明不使用 主要是 setup script 内的函数即使在模板中使用了，依旧会报定义未使用的错误 
    },
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        'parser': '@typescript-eslint/parser',
        'ecmaVersion': 2020
    }
};