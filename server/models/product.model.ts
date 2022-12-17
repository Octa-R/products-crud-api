import { sequelize } from "../db";
import { Model, DataTypes } from "sequelize";

class Product extends Model { }

Product.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  unit_price: {
    type: DataTypes.REAL(10, 2)
  },
  stock: {
    type: DataTypes.INTEGER
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: "Product"
})

export { Product }