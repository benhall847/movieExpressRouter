function retrieveAll(req,res){
    res.json({message:"A BUNCHA MOVIES!"})
}
function create(req,res){
    res.json({message:"Youre a movie director!"})
}
function update(req,res){
    res.json({message:"You updated a movie!"})
}
function deleteOne(req,res){
    res.json({message:"You destroyed the database"})
}
function getByID(req,res){
    res.json({message: `you requested user: ${req.params.id}`})
}

module.exports = {
    retrieveAll,
    create,
    update,
    deleteOne,
    getByID
}