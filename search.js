document.addEventListener("DOMContentLoaded", function () {
  const query = localStorage.getItem("searchQuery")?.toLowerCase().trim();
  const container = document.getElementById("search-results");
  const allProducts = getAllProducts();

  if (!query) {
    container.innerHTML = "<p>No search query provided.</p>";
    return;
  }

  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
});
