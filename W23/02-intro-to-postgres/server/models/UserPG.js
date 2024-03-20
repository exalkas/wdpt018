import { DataTypes, Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(process.env.DB_URI_PG, { dialect: "postgres" });

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// sequelize.sync();

export default User;
