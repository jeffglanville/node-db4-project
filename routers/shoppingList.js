const express = require("express")
const Ingredient = ("../models/shoppingList")

const router = express.Router()

router.get("/ingredients", async (req, res, next) => {
    try{
        const ingredients = await Ingrediant.find()
        res.json(ingredients)
    }catch(err) {
        next(err)
    }
})

router.get("/ingredients/:id", async (req, res, next) => {
    try{
        const ingredient = await Ingredient.findById(req.params.id)
        if(!ingredient) {
            return res.status(404).json({
                message: "This ingredient is not found"
            })
        }
        res.json(ingredient)
    }catch(err) {
        next(err)
    }
})

module.exports = router