document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded and DOM fully parsed");
  const pages = document.querySelectorAll(".timeline-page");
  let currentPage = 0;

  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  function updatePage() {
    pages.forEach((page, index) => {
      if (index === currentPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // Update the buttons' disabled state
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === pages.length - 1;
  }

  prevButton.addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      updatePage();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updatePage();
    }
  });

  // Initialize the first page
  updatePage();
});
