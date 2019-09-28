module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error", // Declara no eslint uma msg de error, quando algo não estiver conforme o padrão.
    "class-methods-use-this": "off", // Os Controller vão estar dentro de uma class, porém não precisam utilizar diretamente o This
    "no-param-reassign": "off", // Vai ser necessario Receber parametros e fazer alterações neles devido ao uso do Sequelize
    "camelcase": "off", // novaVariavel, agora pode ser escrito assim nova_variavel
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "next" // Agora podemos utilizar o método next() do express sem problemas
    }]
  },
};

/*
1- yarn/npm add eslint -D
2-yarn eslint --init
3- Apagar packjson.lock
4- yarn
5-yarn add prettier eslint-config-prettier eslint-plugin-prettier -D (Deixa o código mais bonito)
6- criar file na raiz chamado .prettierrc, com as configs:
  6.1-
    {
    "singleQuote": true,
    "trailingComma": "es5"
    }
8- Add a esse arquivo:
  8.1- extends: ['airbnb-base','prettier'], plugins: ['prettier'],
7-yarn eslint --fix src --ext .js (todos os arquivos js encontrados na pasta src, serão salvos automaticamente)
*/
