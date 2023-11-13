export const getRecipeById = async (recipeId) => {
    const req = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    );
    const res = await req.json();
    return res;
};
