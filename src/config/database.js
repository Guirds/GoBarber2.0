// Credenciais para acessar a base de dados
// sintaxe em  commonJS, devido a leitura do arquivo ser feita tanto pela aplicação quanto pela CLI do sequelize. A CLI não reconhece o export.default

module.exports = {
  dialect: 'postgres', // Banco  de dados que será utilizado (Procurar as dependencias do BD no site oficial do sequelize)
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarder',
  define: {
    timestamps: true, // Garante a criação de uma coluna chamada updated_at e uma coluna created_at em cada tabela do BD, vão armazenar a data de criação e edição de cada registro.
    underscored: true, // "Fala" para o sequelize que o formato a ser utilizado para salvar o nome das tabelas deve ser nova_tabela e não NovaTabelas que é o padrão do sequelize...
    underscoredAll: true, // Mesma regra que a de cima, porém a aplicação dela será as colunas e relacionamentos.
  },
};
