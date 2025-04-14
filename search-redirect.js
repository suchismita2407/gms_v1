document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", function () {
    const query = searchInput.value.trim();
    if (query) {
      localStorage.setItem("searchQuery", query);
      window.location.href = "search.html"; // redirect to new page
    }
  });
});
