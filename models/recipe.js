const db = require("../data/config")

function find() {
    return db("recipes")
}

function findById(){
    return db("recipes")
    .where("id", id)
    .first()
}

module.exports = {
    find,
    findById
}