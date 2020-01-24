import Sequelize, { Model } from 'sequelize';

class Shoe extends Model {
  static init(sequelize) {
    super.init({
      url: Sequelize.STRING,
      name: Sequelize.STRING,
      price: Sequelize.FLOAT,
    }, {
      sequelize
    });

    return this;
  }
}

export default Shoe;
