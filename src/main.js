const topDisplay = document.getElementById("top");
const RecomDisplay = document.getElementById("recommendation");
const PremiDisplay = document.getElementById("new");
const sectionPremier = document.getElementById('section-premier');
const sectionTop = document.getElementById('section-top');
const movieFilterByLetter = document.getElementById('movies-sci-fi-filter');
const searchLett = document.getElementById("search");
const topTenOrder = document.getElementById("imdbRating");
const movieRelease = document.getElementById("Year");
const dataMovieList = [];
const imbId = ['tt0816692', 'tt0083658', 'tt1454468', 'tt0499549',
  'tt0106062', 'tt0079501', 'tt0796366', 'tt0888496',
  'tt0084827', 'tt0088763', 'tt0078748', 'tt3188542', 'tt2087752',
];

//Función para crear arrego de la Data con Fetch
const dataMovie = () => {
  for (let i = 0; i < imbId.length; i++) {
    fetch('https://www.omdbapi.com/?i=' + imbId[i] + '&apikey=333f998f')
      .then(response => response.json())
      .then(data => {
        dataMovieList.push(data);
      })
  }
};


//Función que sirve para imprimir data
const printMoviesTop = (dataMovieList) => {
  sectionTop.innerHTML = " ";

  dataMovieList.map((dataMovieList) => {
    let nameMovies =
      `<div class="data"><h5>${dataMovieList.Title}</h5><p>${dataMovieList.Year}</p>
    <p>${dataMovieList.imdbRating}</p><img id="${dataMovieList.Title}" src="${dataMovieList.Poster}">
    </div>`;
    sectionTop.insertAdjacentHTML("beforeend", nameMovies);

  })
};

const printMoviesPrem = (dataMovieList) => {
  sectionPremier.innerHTML = " ";

  dataMovieList.map((dataMovieList) => {
    let nameMovies =
      `<div class="data"><h5>${dataMovieList.Title}</h5><p>${dataMovieList.Year}</p>
    <p>${dataMovieList.imdbRating}</p><img id="${dataMovieList.Title}" src="${dataMovieList.Poster}">
    </div>`;
    sectionPremier.insertAdjacentHTML("beforeend", nameMovies);

  })
};

//Funciín que filtra por conincidencia en Titulo, Director o año
const filterCoincidence = () => {
  searchLett.addEventListener("keyup", () => {
    let searchValue = document.getElementById("search").value;
    printMovies(window.data.filterByConside(dataMovieList, searchValue));
  });
}

//Función para ordenar por calificacion de Ranking
topTenOrder.addEventListener("click", () => {
  topDisplay.style.display = "block";
  PremiDisplay.style.display = "none";
  RecomDisplay.style.display = "none";
  arrayNewOrder = window.data.orderData(dataMovieList);
  arrayTenMovies = arrayNewOrder.slice(0, 10);
  printMoviesTop(arrayTenMovies);

})
//
//Funcion para filtrar por año
movieRelease.addEventListener("click", () => {
  topDisplay.style.display = "none";
  PremiDisplay.style.display = "block";
  RecomDisplay.style.display = "none";
  arrayMovie = window.data.filterbyYear(dataMovieList);
  printMoviesPrem(arrayMovie);
})

//Invocando funciónes
dataMovie();
filterCoincidence();