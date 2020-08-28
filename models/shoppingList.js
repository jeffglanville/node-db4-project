const db = require("../data/config")

function find() {
    return db("ingredients as i")
    .join("recipes as r", "r.id", "i.recipes_id")
    .select("r.recipes_id", "r.name as recipe", "i.recipes_id as ingredients")
}

function findById(id){
    return db("ingredients as i")
    .where("i.id", id)
    .join("recipes as r", "r.id", "i.recipes_id")
    .first("i.id", "i.name", "r.name as recipes_name")
}

module.exports = {
    find,
    findById
}