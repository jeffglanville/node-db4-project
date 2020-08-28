const express = require("express");
const Recipe = require("../models/recipe");

const router = express.Router();

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id", async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        message: "The recipe is not found",
      });
    }
    res.json(instruction);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id/ingredients", (req, res, next) => {
  try{
    const ingredients = await Recipe.findIngredients(req.params.id)
    res.json(ingredients)
  }catch (err) {
    next(err)
  }
})

router.get("/recipes/:id/instructions", (req, res, next) => {
  try{
    const instructions = await Recipe.findInstructions(req.params.id)
    res.json(instructions)
  }catch(err) {
    next(err)
  }
})

module.exports = router;