const db = require("../data/config")

function find() {
    return db("instructions as i")
    .join("recipes as r", "r.id", "i.recipes_id")
    .select("i.id", "i.steps", "r.name a recipe" )
}

function findById(){
    return db("instructions as i")
    .where("i.id", id)
    .join("recipes as r", "r.id", "i.recipes_id")
    .first("i.id", "i.steps", "r.name as recipe")
}

module.exports = {
    find,
    findById
}