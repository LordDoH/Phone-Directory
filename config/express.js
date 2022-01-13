const express = require('express');
const morgan = require ('morgan');


function expressConfig (app) {
  app.use(express.json());
}

const middleware1 = morgan ('tiny');


const middleware2 = morgan(':method :url :status :res[content-length] - :response-time ms :person');


morgan.token('person', (request, response)=>{
  const content = request.body;
  return JSON.stringify(content)
});



module.exports = {expressConfig, middleware1, middleware2}