const Router = require('express').Router
const moviesRoute = Router();
const {
    retrieveAll,
    create,
    update,
    deleteOne
} = require('../controllers/movies');

moviesRoute.get('/',retrieveAll);
moviesRoute.post('/',create);
moviesRoute.put('/',update);
moviesRoute.delete('/',deleteOne);

module.exports = moviesRoute;