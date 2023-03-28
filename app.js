import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());


import recipes from "./recipes.js";
app.get("/", (req, res) => res.send("4 Recipies From All Over The World"));

app.get("/recipes", (req, res) => res.json(recipes));

//route to get a single recipe by id
app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) return res.send('recipe not found');
  res.send(recipe);
});

app.post("/recipes", (req, res) => res.send("search"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
