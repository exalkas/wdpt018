import { Sequelize } from "sequelize";

export default async function connect() {
  try {
    const sequelize = new Sequelize(process.env.DB_URI_PG, {
      dialect: "postgres",
    });

    await sequelize.authenticate();

    console.log("Connected to POSTGRES db");
  } catch (error) {
    console.log("🚀 ~ error connecting to db:", error.message);
  }
}
