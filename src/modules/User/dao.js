import {Model} from 'sequelize';

class User extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING
            }, {sequelize, modelName: 'User'}
        );
    }
    static associate(models) {
        // define association here

        return this;
    }
};

export default User;