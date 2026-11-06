function BrownieRecipe(name, ingredients, bakeTemp, bakeTime, prepTime, servings) {
    this.name = name;
    this.ingredients = ingredients;
    this.bakeTemp = bakeTemp;
    this.bakeTime = bakeTime;
    this.prepTime = prepTime;
    this.servings = servings;

    this.displayRecipe = function() {
        return this.name + " takes " + this.bakeTime + " minutes to bake.";
    };

    this.getIngredients = function() {
        return this.ingredients.join(", ");
    };
}

let recipe1 = new BrownieRecipe(
    "Classic Fudge Brownies",
    ["4 eggs", "1 1/4 cups cocoa", "1 teaspoon salt",
     "1 teaspoon baking powder", "1 tablespoon vanilla",
     "16 tablespoons butter", "2 1/4 cups sugar",
     "1 1/2 cups flour", "2 cups chocolate chips"],
    "350°F",
    "28-32",
    "12 minutes",
    "24 brownies"
);

let recipe2 = new BrownieRecipe(
    "Double Chocolate Brownies",
    ["12 ounces bittersweet chocolate", "3 tablespoons butter",
     "3/4 cup sugar", "2 eggs", "3/4 cup flour",
     "3/4 teaspoon salt", "2 cups walnuts (optional)"],
    "325°F",
    "30-35",
    "30 minutes",
    "36 brownies"
);

let recipe3 = new BrownieRecipe(
    "Peanut Butter Brownies",
    ["4 eggs", "1 1/4 cups cocoa", "1/2 cup peanut butter",
     "1 tablespoon vanilla", "1 teaspoon salt",
     "16 tablespoons butter", "2 1/4 cups sugar",
     "1 1/2 cups flour", "2 cups peanut butter chips"],
    "350°F",
    "28-32",
    "15 minutes",
    "24 brownies"
);

let recipes = [recipe1, recipe2, recipe3];

let output = document.getElementById("recipes");

recipes.forEach(function(recipe) {

    let ingredientList = "";

    for (let i = 0; i < recipe.ingredients.length; i++) {
        ingredientList += "<li>" + recipe.ingredients[i] + "</li>";
    }

    output.innerHTML += `
        <h2>${recipe.name}</h2>
        <ul>
            <li><strong>Ingredients:</strong>
                <ul>
                    ${ingredientList}
                </ul>
            </li>
            <li>Oven Temperature: ${recipe.bakeTemp}</li>
            <li>Baking Time: ${recipe.bakeTime} minutes</li>
            <li>Preparation Time: ${recipe.prepTime}</li>
            <li>Servings: ${recipe.servings}</li>
            <li>${recipe.displayRecipe()}</li>
        </ul>
    `;
});