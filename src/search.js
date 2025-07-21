let recipes = [
  {
    title: "Chocolate Chip Cookies",
    slug: "chocolate-chip-cookies",
    keywords: ["dessert"],
  },
  {
    title: "Cheeseburger",
    slug: "cheeseburger",
    keywords: ["dinner", "beef", "grill"],
  },
];

export async function recipeSearch(searchTerm) {
  const term = searchTerm.toLowerCase();

  if (term === "") {
    return recipes;
  }

  return recipes.filter((item) => {
    // Search in title
    const titleMatch = item.title.toLowerCase().includes(term);

    // Search in slug
    const slugMatch = item.slug.toLowerCase().includes(term);

    // Search in keywords array
    const keywordMatch = item.keywords.some((keyword) =>
      keyword.toLowerCase().includes(term),
    );

    return titleMatch || slugMatch || keywordMatch;
  });
}
