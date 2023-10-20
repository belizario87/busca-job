const Sequelize = require("sequelize");
const sequelize = new Sequelize("busca_job", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Conexão estabelecida");
  })
  .catch(function (erro) {
    console.log("falha ao se conectar: " + erro);
  });

module.exports = sequelize;
