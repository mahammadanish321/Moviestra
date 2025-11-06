window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-box input");
  const goBtn = document.getElementById("Go");
  const moviesGrid = document.querySelector(".movies-grid");
  const overlay = document.getElementById("overlay");

  goBtn.addEventListener("click", () => {
    async function apiResponse() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${input.value}&apikey=da6fad4a`
        );
        let responseData = await response.json();
        console.log(responseData);

        // Clear existing movie cards
        moviesGrid.innerHTML = "";

        if (responseData.Search && responseData.Search.length > 0) {
          // Hide overlay and show results
          overlay.style.display = "none";
          for (let i = 0; i < responseData.Search.length; i++) {
            const movie = responseData.Search[i];
            const movieCard = document.createElement("div");
            movieCard.className = "movie-card";

            const posterSrc = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x200?text=No+Image";

            movieCard.innerHTML = `
              <img class="movie-poster" src="${posterSrc}" alt="${movie.Title} Poster">
              <div class="movie-header">
                <div>
                  <h3 class="movie-title">${movie.Title}</h3>
                  <p class="movie-year">${movie.Year}</p>
                </div>
                <span class="rating-badge">${movie.Type}</span>
              </div>
              <button class="watch-btn">Watch Trailer</button>
            `;

            moviesGrid.appendChild(movieCard);
          }
        } else {
          // Show movie not found image
          overlay.style.display = "block";
          overlay.style.backgroundImage = "url('public/movieNotFound.png')";
        }
      } catch (error) {
        console.log("error:", error);
        // Show try again image
        overlay.style.display = "block";
        overlay.style.backgroundImage = "url('public/tryAgen.png')";
      }
    }
    apiResponse();
  });
});

// objTest = {
//   0 : "0th element",
//   1 : "1st element",
//   2 : "2nd element"
// }

// console.log(objTest[2])// test case