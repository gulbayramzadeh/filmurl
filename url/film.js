


// tmdb API 
const apiKey = 'YOUR_API_KEY';

const searchTerm = 'The Godfather'; // Axtarilan film adı

// API ucun URL unvan
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

   fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    movies.forEach(movie => {
      console.log(movie.title);
    });
  })
  .catch(error => console.error('Error fetching data:', error));







