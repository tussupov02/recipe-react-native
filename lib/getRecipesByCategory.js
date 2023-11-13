export const getRecipesByCategory = async (activeCategory) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`;
    const req = await fetch(url);
    const res = await req.json();
    return res;
};
