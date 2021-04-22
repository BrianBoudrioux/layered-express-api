import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class BookDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                title: DataTypes.STRING,
                content: DataTypes.TEXT
            }, {sequelize, modelName: 'Book'}
        );
    }
    static associate(models) {
        // define association here
        this.belongsTo(models.User)
        return this;
    }
};

BookDao.init(db.sequelize);

export default BookDao;