import { recipeSearch } from "./search";

const searchButton = document.getElementById("search-button");
const searchInput = document.querySelector("input");
const resultContainer = document.getElementById("search-results");

searchButton.addEventListener("click", async () => {
  const searchTerm = searchInput.value || "";
  try {
    // Show loading state
    resultContainer.textContent = "Loading...";

    // Wait for search results
    const recipes = await recipeSearch(searchTerm);

    // Display results
    displaySearchResults(recipes);
  } catch (error) {
    console.error("Search failed:", error);
    resultContainer.textContent = "Error loading recipes. Please try again.";
  }
});

function displaySearchResults(recipes) {
  // Clear previous results
  resultContainer.innerHTML = "";

  if (recipes.length === 0) {
    resultContainer.textContent = "No recipes found.";
    return;
  }

  // Create a list of results
  const list = document.createElement("ul");
  recipes.forEach((recipe) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `/recipes/${recipe.slug}`;
    link.textContent = recipe.title;
    item.appendChild(link);
    list.appendChild(item);
  });

  resultContainer.appendChild(list);
}
