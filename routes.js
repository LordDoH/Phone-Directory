const person = require ('./api/person')

function routes(app){
  app.use('/', person);
}

module.exports = routes;