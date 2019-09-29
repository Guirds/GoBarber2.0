import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    // Adicionar todas as columas que serão inseridas pelo usuário
    // 1º parametro
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      // 2º parametro
      {
        sequelize,
      }
    );
  }
}

export default User;
