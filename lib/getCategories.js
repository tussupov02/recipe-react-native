export const getCategories = async () => {
  const req = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const res = await req.json();
  return res;
};
