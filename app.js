const apiKey = 'cc13a2f6dab8874566057368ae0427b8';

async function searchMovies() {
    const query = document.getElementById('search').value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    displayResults(data.results);
}

function displayResults(movies) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
            <p><strong>Note :</strong> ${movie.vote_average}</p>
            <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">Voir plus</a>
        `;
        results.appendChild(movieElement);
    });
}