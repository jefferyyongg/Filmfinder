const menuContainer = document.querySelector("#movieUl")
const userInput = document.querySelector('#search input')

userInput.addEventListener('change', (e) => {
    renderMovies(movieFilter(e.target.value));
});

const latestMovie = () => movies.filter(movie =>{
    return parseInt(movie.year) >= 2014
})

const movieFilter = (name) => movies.filter(movie =>{
    return movie.title.toLocaleLowerCase().includes(name);
})

const radioBtns = () => {
    document.querySelectorAll('.menu input').forEach(btn =>{
        btn.addEventListener('change', () => {
            renderMovies(btn.id == 'latest'
                ? latestMovie()
                : movieFilter(btn.id)
            );
        })
    })
}

const renderMovies = (movies) => {
  menuContainer.innerHTML = "";
  addMoviesToDom(movies);
}

const addMoviesToDom = (movies) => movies.map(movie =>{
    const li = document.createElement('li');
    const posterImg = document.createElement('img');
    const a = document.createElement('a');

    posterImg.setAttribute('id', 'posterImg')
    a.setAttribute('href', `https://www.imdb.com/title/${movie.imdbID}/`)
    posterImg.src = movie.poster

    a.appendChild(posterImg)
    li.appendChild(a);
    menuContainer.appendChild(li);
})

radioBtns();
addMoviesToDom(movies);