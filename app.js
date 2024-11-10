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
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
            <p><strong>Note :</strong> ${movie.vote_average}</p>
        `;
        results.appendChild(movieElement);
    });
}