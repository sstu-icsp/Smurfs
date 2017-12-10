module.exports = function(app) {
  const index = require('./index');
  const auth = require('./auth');
  const registration = require('./registration');
  app.use(index,auth,registration);
};
