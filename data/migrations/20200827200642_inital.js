exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("name").notNull()
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.float("quantity").notNull()
  })

  await knex.schema.createTable("recipes_ingredients", (table) => {
      table.integer("recipes_id")
        .notNull()
        .references("id")
        .inTable("recipes")
      table.integer("ingredients_id")
        .notNull()
        .references("id")
        .inTable("ingredients")
      table.primary("recipe_id", "ingredient_id")
  })

  await knex.schema.createTable("instructions", (table) => {
      table.increments("id")
      table.text("steps").notNull()
      table.integer("recipes_id")
        .notNull()
        .references("id")
        .inTable("recipes")
      table.primary("recipes_id")
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
