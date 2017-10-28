// routes/all_routes.js
module.exports = function(app,db) {
  /*сюда записываются все конроллеры формат require('./index')(app);
  Используется паттерн проектирования Фасад
  */
  require('./index')(app);
};
