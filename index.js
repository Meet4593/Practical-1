// Array of movie objects
const movieCollection = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 8.8, releaseYear: 2010 },
    { title: 'The Dark Knight', genre: 'Action', rating: 9.0, releaseYear: 2008 },
    { title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6, releaseYear: 2014 },
    { title: 'Parasite', genre: 'Thriller', rating: 8.6, releaseYear: 2019 },
    { title: 'Avengers: Endgame', genre: 'Action', rating: 8.4, releaseYear: 2019 }
  ];
  
  // Add a new movie
  function addMovie(movie) {
    movieCollection.push(movie);
    console.log(`Added movie: ${movie.title}`);
  }
  const movies = [
    { title: "Pushpa", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "Punjabi", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

const addMovie = (collection, movie) => {
    collection.push(movie);
};
// here push will input the element in collection array.
addMovie(movies,
    { title: "Tenet", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 });

// console.log(movies);


const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
//here the filter method will filter the movies with genre we have provided in arguement

// console.log(listMoviesByGenre(movies, "Sci-Fi"));

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
//here the value of highest will be the first element of array and it will compare to the rest element of movie.

// console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};
//here we are using to make array of movies in order of their title.

// console.log(getMovieTitles(movies));

const movieAfterYear =(collection,year)=>{
    return collection.filter(movie => movie.releaseYear>year)
}
//here we are simply doing comparison of given year and the movie year.
// console.log(movieAfterYear(movies,2011));

movies.forEach(movie => {
    console.log(`${movie.title}(${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`)
})

//here it will display the all movies one by one with the define sentance.
//to define sentances we are using template literals.

  // List movies by genre
  function listMoviesByGenre(genre) {
    const moviesInGenre = movieCollection.filter(movie => movie.genre === genre);
    console.log(`Movies in the ${genre} genre:`);
    moviesInGenre.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
  }
  
  // Find the highest-rated movie
  function highestRatedMovie() {
    const highestRated = movieCollection.reduce((max, movie) => (movie.rating > max.rating) ? movie : max);
    console.log(`Highest-rated movie: ${highestRated.title} with a rating of ${highestRated.rating}`);
  }
  
  // List movie titles using map()
  function listMovieTitles() {
    const titles = movieCollection.map(movie => movie.title);
    console.log('Movie Titles:');
    titles.forEach(title => console.log(`- ${title}`));
  }
  
  // Find movies released after a specific year using filter()
  function moviesAfterYear(year) {
    const recentMovies = movieCollection.filter(movie => movie.releaseYear > year);
    console.log(`Movies released after ${year}:`);
    recentMovies.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
  }
  
  // Log movie info using template literals
  function logMovieInfo(movie) {
    console.log(`Title: ${movie.title}\nGenre: ${movie.genre}\nRating: ${movie.rating}\nRelease Year: ${movie.releaseYear}`);
  }
  
  // Examples of usage:
  addMovie({ title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7, releaseYear: 1999 });
  listMoviesByGenre('Sci-Fi');
  highestRatedMovie();
  listMovieTitles();
  moviesAfterYear(2010);
  movieCollection.forEach(logMovieInfo);
  