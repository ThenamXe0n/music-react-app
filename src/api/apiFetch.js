async function getRecipies() {
  let apiUrl = "https://dummyjson.com/recipes";
  let recipes = await fetch(apiUrl);
  let data = await recipes.json();
  return data;
}
console.log(getRecipies())