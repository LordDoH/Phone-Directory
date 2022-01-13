const person = require ('./api/person')

function routes(app){
  app.use('/api/persons', person);
}

module.exports = routes;