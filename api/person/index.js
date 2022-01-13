const { Router } = require ('express');
const { middleware1, middleware2 } = require('../../config/express');
const { infoHandler, personsHandler, personIdHandler, deleteHandler, postHandler } = require('./persons.controller')


const router = new Router ();

router.get('/info', middleware1, infoHandler);
router.get('/', middleware1, personsHandler);
router.get('/:id', middleware1, personIdHandler);
router.delete('/:id', middleware1, deleteHandler);
router.post('/', middleware2, postHandler);


module.exports = router;