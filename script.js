window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-box input");
  const goBtn = document.getElementById("Go");
  const moviesGrid = document.querySelector(".movies-grid");
  const overlay = document.getElementById("overlay");
  const suggestionsList = document.getElementById('suggestionsList');
  



//add databace from mongoDB leter
  const allSuggestions = ["Avatar",
  "Avengers: Endgame",
  "Avatar: The Way of Water",
  "Avengers: Infinity War",
  "Avengers",
  "Aquaman",
  "Aladdin (2019)",
  "Alice in Wonderland (2010)",
  "Ant-Man",
  "Armageddon",
  "Barbie",
  "Black Panther",
  "Beauty and the Beast (2017)",
  "Black Panther: Wakanda Forever",
  "The Dark Knight Rises (B-Title)",
  "Bumblebee",
  "The Boss Baby",
  "Brave",
  "Back to the Future",
  "Batman Begins",
  "Captain America: Civil War",
  "Captain Marvel",
  "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
  "Clash of the Titans (2010)",
  "Casino Royale",
  "Cinderella (2015)",
  "Coco",
  "Close Encounters of the Third Kind",
  "Catching Fire",
  "Croods, The",
  "The Dark Knight",
  "Despicable Me 2",
  "Despicable Me 3",
  "Doctor Strange in the Multiverse of Madness",
  "Deadpool",
  "Dune: Part Two",
  "Dumbo (2019)",
  "Dr. Seuss' The Grinch",
  "Detective Pikachu",
  "Die Hard",
  "E.T. the Extra-Terrestrial",
  "The Exorcist",
  "The Empire Strikes Back",
  "Everest",
  "Encanto",
  "Extraction",
  "Eternals",
  "Edge of Tomorrow",
  "Elizabeth: The Golden Age",
  "Eight Legged Freaks",
  "Frozen II",
  "Furious 7",
  "Frozen",
  "The Fate of the Furious",
  "Finding Dory",
  "Finding Nemo",
  "Fast & Furious 6",
  "Fantastic Beasts and Where to Find Them",
  "Forrest Gump",
  "The Fugitive",
  "Guardians of the Galaxy Vol. 3",
  "Gravity",
  "Godzilla (2014)",
  "Gladiator",
  "Ghostbusters (1984)",
  "G.I. Joe: The Rise of Cobra",
  "The Great Gatsby (2013)",
  "Get Out",
  "Ghost in the Shell (2017)",
  "Gone Girl",
  "Harry Potter and the Deathly Hallows – Part 2",
  "The Hunger Games",
  "Hobbit: An Unexpected Journey, The",
  "How to Train Your Dragon",
  "Home Alone",
  "Hancock",
  "Hotel Transylvania",
  "Hacksaw Ridge",
  "Hellboy (2004)",
  "Hulk (2003)",
  "Inside Out 2",
  "Iron Man 3",
  "Incredibles 2",
  "Inception",
  "Interstellar",
  "Indiana Jones and the Kingdom of the Crystal Skull",
  "Ice Age: Dawn of the Dinosaurs",
  "I Am Legend",
  "The Italian Job (2003)",
  "Independence Day",
  "Jurassic World",
  "Jurassic World: Fallen Kingdom",
  "Joker",
  "Jurassic Park",
  "Jumanji: Welcome to the Jungle",
  "Jumanji: The Next Level",
  "James Bond: Skyfall",
  "John Wick: Chapter 4",
  "Justice League",
  "The Jungle Book (2016)",
  "Kung Fu Panda 3",
  "King Kong (2005)",
  "Kong: Skull Island",
  "Kingdom of Heaven",
  "Knives Out",
  "The King's Speech",
  "Kick-Ass",
  "Kindergarten Cop",
  "Krampus",
  "Kimi no Na wa (Your Name)",
  "The Lion King (2019)",
  "Lilo & Stitch (2025)",
  "Lord of the Rings: The Return of the King, The",
  "Life of Pi",
  "The Last Jedi",
  "The LEGO Movie",
  "Logan",
  "Lethal Weapon 4",
  "La La Land",
  "Lincoln",
  "Minions",
  "Moana 2",
  "The Super Mario Bros. Movie (M-Title)",
  "Mission: Impossible - Fallout",
  "Man of Steel",
  "Mad Max: Fury Road",
  "The Martian",
  "Men in Black 3",
  "Mamma Mia!",
  "Monsters, Inc.",
  "Ne Zha 2 (哪吒之魔童闹海)",
  "No Time to Die",
  "Night at the Museum",
  "Now You See Me",
  "Noah",
  "National Treasure",
  "Napoleon",
  "Need for Speed",
  "Neighbors",
  "The Notebook",
  "Oppenheimer",
  "Once Upon a Time in Hollywood",
  "Oz the Great and Powerful",
  "Ocean's Eleven",
  "Oblivion",
  "Olympus Has Fallen",
  "Onward",
  "Over the Hedge",
  "The Other Guys",
  "Oldboy (2003)",
  "Pirates of the Caribbean: Dead Man's Chest",
  "Pirates of the Caribbean: On Stranger Tides",
  "The Phantom Menace",
  "Pitch Perfect 2",
  "Prometheus",
  "Paddington 2",
  "Puss in Boots: The Last Wish",
  "Paranormal Activity",
  "Planet of the Apes (2001)",
  "Polar Express, The",
  "Quantum of Solace",
  "A Quiet Place",
  "Quarantine",
  "Queen (2014) (Indian)",
  "The Quick and the Dead",
  "Quadrophenia",
  "Quiz Show",
  "Rogue One: A Star Wars Story",
  "The Rise of Skywalker",
  "Ready Player One",
  "Ratatouille",
  "Rango",
  "The Revenant",
  "Rampage",
  "Rush Hour 2",
  "Rio 2",
  "RoboCop (2014)",
  "Spider-Man: No Way Home",
  "Skyfall",
  "Star Wars: The Force Awakens",
  "Spectre",
  "Shrek 2",
  "Spider-Man: Far From Home",
  "Suicide Squad (2016)",
  "Shazam!",
  "Shang-Chi and the Legend of the Ten Rings",
  "The Secret Life of Pets",
  "Titanic",
  "Top Gun: Maverick",
  "Toy Story 4",
  "Toy Story 3",
  "Transformers: Dark of the Moon",
  "Transformers: Age of Extinction",
  "The Twilight Saga: Breaking Dawn – Part 2",
  "Trolls",
  "Taken 2",
  "Tenet",
  "Up",
  "Underworld: Awakening",
  "Uncharted",
  "Unstoppable",
  "Underworld",
  "Under the Tuscan Sun",
  "United 93",
  "Unforgiven",
  "Us",
  "Universal Soldier",
  "Venom",
  "Venom: Let There Be Carnage",
  "Valerian and the City of a Thousand Planets",
  "Vanilla Sky",
  "Valkyrie",
  "V for Vendetta",
  "The Vow",
  "Vertical Limit",
  "Vacancy",
  "Victor Frankenstein",
  "Wonder Woman",
  "War for the Planet of the Apes",
  "World War Z",
  "Wreck-It Ralph",
  "Where the Wild Things Are",
  "War of the Worlds (2005)",
  "Watchmen",
  "Whiplash",
  "White House Down",
  "Wanted",
  "X-Men: Days of Future Past",
  "X2: X-Men United",
  "xXx: Return of Xander Cage",
  "X-Men: Apocalypse",
  "X-Men: First Class",
  "X-Men Origins: Wolverine",
  "The X-Files: Fight the Future",
  "Your Name. (Kimi no Na wa)",
  "Yesterday",
  "Yogi Bear",
  "You've Got Mail",
  "Young Frankenstein",
  "The Young Messiah",
  "Yes Man",
  "Zootopia",
  "Zootopia 2 (Anticipated)",
  "Zodiac",
  "Zombieland",
  "Zero Dark Thirty",
  "Zoolander",
  "Zathura: A Space Adventure"]



input.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  suggestionsList.innerHTML = ''; // Clear previous suggestions

  if (query.length > 0) {
    const filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query)
    );

    if (filteredSuggestions.length > 0) {
      filteredSuggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion;
        listItem.addEventListener('click', () => {
          input.value = suggestion;
          suggestionsList.style.display = 'none';
        });
        suggestionsList.appendChild(listItem);
      });
      suggestionsList.style.display = 'block'; // Show dropdown
    } else {
      suggestionsList.style.display = 'none'; // Hide if no suggestions
    }
  } else {
    suggestionsList.style.display = 'none'; // Hide if input is empty
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.search-container')) {
    suggestionsList.style.display = 'none';
  }
});










  function renderData() {
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

            const posterSrc =
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x200?text=No+Image";

                //this is for dcynamic movie card result 
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

            const watchBtn = movieCard.querySelector(".watch-btn");
            watchBtn.addEventListener("click", () => {
              window.open(
                `https://www.imdb.com/title/${movie.imdbID}/`,
                "_blank"
              );
            });
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
  }

  goBtn.addEventListener("click", renderData);
  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      renderData();
    }
  });
});

//Refresh the dropdown section for eatch latter
//If press the tab button user can select the first suggestion
//If user click any of those suggetion then immediately search it.
// divide the arraya into multiple section using the English alphabet like ABC to z
