const { Router } = require ('express');
const { middleware1, middleware2 } = require('../../config/express');
const { infoHandler, personsHandler, personIdHandler, deleteHandler, postHandler } = require('./persons.controller')


const router = new Router ();

router.get('/info', middleware1, infoHandler);
router.get('/api/persons', middleware1, personsHandler);
router.get('/api/persons/:id', middleware1, personIdHandler);
router.delete('/api/persons/:id', middleware1, deleteHandler);
router.post('/api/persons', middleware2, postHandler);


module.exports = router;