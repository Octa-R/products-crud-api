import { Sequelize } from "sequelize";
const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'db',
  port: 5432,
  dialect: "postgres"
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  await sequelize.sync({ alter: true })
})()


export { sequelize }