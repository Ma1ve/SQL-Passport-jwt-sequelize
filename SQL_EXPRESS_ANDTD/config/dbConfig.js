module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Stssms10',
  DB: 'node_sequelize_api_db',
  dialict: 'mysql',
  
  pool: {
    max: 5,
    man: 0,
    acquire: 30000,
    idle: 10000
  }
}