const db = require("../data/config")

function find() {
    return db("recipes")
}

function findById(){
    return db("recipes")
    .where("id", id)
    .first()
}

function findIngredients(recipeId){
    return db("recipes")
    .join("ingredients")
    .where("recipe.id", recipeId)
    .select(
        "recipes.id",
        "recipes.name",
        "ingredient.name"
    )
}

function findInstructions(recipeId){
    return db("recipes")
    .join("instructions")
    .where("recipe.id", recipeId)
    .select(
        "recipes.id",
        "recipes.name",
        "instructions.steps"
    )
}

module.exports = {
    find,
    findById,
    findIngredients,
    findInstructions
}