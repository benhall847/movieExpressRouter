const Router = require('express').Router
const moviesRoute = Router();
const {
    retrieveAll,
    create,
    update,
    deleteOne,
    getByID,
    updateByID,
    deleteByID
} = require('../controllers/movies');

moviesRoute.get('/',retrieveAll);
moviesRoute.get('/:id', getByID);
moviesRoute.post('/',create);
moviesRoute.put('/',update);
moviesRoute.put('/:id',updateByID)
moviesRoute.delete('/',deleteOne);
moviesRoute.delete('/',deleteByID)

module.exports = moviesRoute;