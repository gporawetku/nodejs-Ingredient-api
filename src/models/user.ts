import { Model, DataTypes } from "sequelize";
import sequelize from ".";

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: any) {
    // define association here
  }
}

User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: true,
    modelName: "User",
    tableName: "User",
  }
);
